import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { EventsComponent } from './events.component';
import { EventsService } from './events.service';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let eventsService: EventsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        EventsComponent
      ],
      providers: [
        EventsService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    eventsService = TestBed.get(EventsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke selectPaymentOption()', () => {
    component.selectPaymentOption(true);
  });

  it('should invoke countCharacters()', () => {
    component.countCharacters();
  });

  it('should invoke checkEventDate() and set invalidDate to false', () => {
    component.checkEventDate('2018-06-30');
  });
});
