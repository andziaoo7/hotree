import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { EVENT_CONSTANTS } from './events.constants';
import { Categories, Employee, PaymentOption, TimeRanges } from './events.interface';
import { EventsService} from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventForm: FormGroup;
  categories: Categories[];
  selectedCategory: number;
  timeRanges: TimeRanges[];
  employees: Employee[];
  loggedinUser: Employee;
  paymentOptions: PaymentOption[];
  showFee: boolean = false;
  addedSuccessfully: boolean = false;

  readonly FORM = EVENT_CONSTANTS.FORM;
  constructor(private formBuilder: FormBuilder,
              private eventsService: EventsService) {
  }

  selectCategory(categoryId: number) {
    this.selectedCategory = categoryId;
  }

  setPaymentOption(selectedOption: boolean) {
      this.showFee = selectedOption;
  }

  submitEvent(eventForm: FormGroup) {
    console.log(eventForm, 'eventForm');
    if(eventForm.valid) {
      this.addedSuccessfully = true;
    }
  }

  ngOnInit() {
    this.createEventForm();
    this.setCategories();
    this.setTimeRanges();
    this.setEmployees();
    this.setPaymentOptions();
    console.log(this.eventForm, 'this.eventForm');
  }

  private createEventForm() {
    this.eventForm = this.formBuilder.group({
      [this.FORM.TITLE]: ['', Validators.required],
      [this.FORM.EVENT_DESCRIPTION]: ['', Validators.required],
      [this.FORM.CATEGORY]: [''],
      [this.FORM.PAYMENT.NAME]: [EVENT_CONSTANTS.FORM.PAYMENT.FREE_EVENT],
      [this.FORM.PAYMENT.FEE]: [''],
      [this.FORM.REWARD]: [''],
      [this.FORM.RESPONSIBLE]: ['', Validators.required],
      [this.FORM.EMAIL]: [''],
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
}
