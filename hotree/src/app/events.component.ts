import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { EVENT_CONSTANTS } from './events.constants';
import { Categories, Coordinator, Employee, EventObject, FormDate, PaymentOption, TimeRanges } from './events.interface';
import { EventsService} from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventForm: FormGroup;
  categories: Categories[];
  timeRanges: TimeRanges[];
  employees: Employee[];
  loggedinUser: Employee;
  paymentOptions: PaymentOption[];
  isPaid: boolean = false;
  addedSuccessfully: boolean = false;
  minDate: string;
  selectedCoordintor: Employee;
  charactersNumber: number = 0;

  readonly FORM = EVENT_CONSTANTS.FORM;
  constructor(private formBuilder: FormBuilder,
              private eventsService: EventsService) {
  }

  selectPaymentOption(selectedOption: boolean) {
      this.isPaid = selectedOption;
  }

  countCharacters() {
    this.charactersNumber = this.eventForm.get('eventDescription').value.length;
  }

  submitEvent(eventForm: FormGroup) {
    const fullEventDate: string = this.getEventDate(eventForm.value.startsOn);
    const convertToSeconds: number = Math.floor(eventForm.value.duration * (60 * 60));
    const coordinator: Employee = this.findCoordinator(eventForm.value.responsible);

    if(eventForm.valid) {
      const createdEvent: EventObject = {
        title: eventForm.value.title,
        description: eventForm.value.eventDescription,
        category_id: eventForm.value.category,
        paid_event: this.isPaid,
        event_fee: eventForm.value.fee ? eventForm.value.fee: null,
        reward: eventForm.value.reward,
        date: fullEventDate,
        duration: convertToSeconds,
        coordinator: {
          email: coordinator.email,
          id: coordinator.id.toString()
        }
      };
      this.addedSuccessfully = true;
      console.log(createdEvent, 'createdEvent')
    }
  }

  ngOnInit() {
    this.setEmployees();
    this.createEventForm();
    this.setCategories();
    this.setTimeRanges();
    this.setPaymentOptions();
    this.setMinDate();
  }

  private createEventForm() {
    this.eventForm = this.formBuilder.group({
      [this.FORM.TITLE]: ['', Validators.required],
      [this.FORM.EVENT_DESCRIPTION]: ['', Validators.required],
      [this.FORM.CATEGORY]: [''],
      [this.FORM.PAYMENT.NAME]: [EVENT_CONSTANTS.FORM.PAYMENT.FREE_EVENT],
      [this.FORM.PAYMENT.FEE]: [''],
      [this.FORM.REWARD]: [''],
      [this.FORM.RESPONSIBLE]: [this.loggedinUser.id, Validators.required],
      [this.FORM.EMAIL]: ['', Validators.pattern(EVENT_CONSTANTS.REGEX_EMAIL_PATTERN)],
      [this.FORM.STARTS_ON.NAME]: this.formBuilder.group({
        [this.FORM.STARTS_ON.DATE]: ['', Validators.required],
        [this.FORM.STARTS_ON.TIME]: ['', Validators.required],
        [this.FORM.STARTS_ON.TIME_INDICATION.NAME]: [EVENT_CONSTANTS.TIME_RANGES.AM.NAME, Validators.required],
      }),
      [this.FORM.DURATION]: [''],
    })
  }

  private setCategories() {
    this.categories = this.eventsService.getCategories();
  }

  private setTimeRanges() {
    this.timeRanges = this.eventsService.getTimeIndications();
  }

  private setEmployees() {
    const allEmployees: Employee[] = this.eventsService.getEmployees();

    this.loggedinUser = allEmployees[3];
    this.employees = allEmployees.filter((employee: Employee) => employee !== this.loggedinUser);
  }

  private setPaymentOptions() {
    this.paymentOptions = this.eventsService.getPaymentOptions();
  }

  private setMinDate() {
    this.minDate = moment().format('YYYY-MM-DD');
  }

  private getEventDate(formDate: FormDate): string {
    const fullTime: string = formDate.time + ' ' + formDate.timeIndication;
    const convertedTime: string = moment(fullTime, 'h:mm A').format('HH:mm');
    const dateWithTime = formDate.date + ' ' + convertedTime;
    const convertedDate: string = moment(dateWithTime).format('YYYY-MM-DDTHH:mm');

    return convertedDate;
  }

  private findCoordinator(responsibleId: number): Employee {
    const allEmployees: Employee[] = this.eventsService.getEmployees();

    allEmployees.filter((employee: Employee) => {
      if(employee.id == responsibleId) {
        this.selectedCoordintor = employee;
      }
    });

    return this.selectedCoordintor;
  }
}
