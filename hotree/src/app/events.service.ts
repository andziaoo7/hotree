import { Injectable } from '@angular/core';

import { EVENT_CONSTANTS } from './events.constants';
import { Categories, Employee, PaymentOption, TimeRanges } from './events.interface';

@Injectable()
export class EventsService {
  readonly CATEGORIES = EVENT_CONSTANTS.CATEGORIES;

  getCategories(): Categories[] {
    return [
      {
        id: 0,
        name: this.CATEGORIES.CYCLING
      },
      {
        id: 1,
        name: this.CATEGORIES.HIKING
      },
      {
        id: 2,
        name: this.CATEGORIES.COOKING
      },
      {
        id: 3,
        name: this.CATEGORIES.ROCK_CLIMBING
      },
      {
        id: 4,
        name: this.CATEGORIES.YOGA
      },
      {
        id: 5,
        name: this.CATEGORIES.FENCING
      },
      {
        id: 6,
        name: this.CATEGORIES.SWIMMING
      },
      {
        id: 7,
        name: this.CATEGORIES.BADMINTON
      },
      {
        id: 8,
        name: this.CATEGORIES.RUNNING
      },
      {
        id: 9,
        name: this.CATEGORIES.DANCE
      }
    ];
  }

  getTimeIndications(): TimeRanges[] {
    return [
      {
        id: 0,
        name: EVENT_CONSTANTS.TIME_RANGES.AM.NAME,
        value: EVENT_CONSTANTS.TIME_RANGES.AM.VALUE
      },
      {
        id: 1,
        name: EVENT_CONSTANTS.TIME_RANGES.PM.NAME,
        value: EVENT_CONSTANTS.TIME_RANGES.PM.VALUE
      }
    ];
  }

  getEmployees(): Employee[] {
    return [
      {
        id: 0,
        name: 'Daniel',
        lastname: 'Mitchell',
        email: 'daniel.mitchell@hussa.rs'
      },
      {
        id: 1,
        name: 'Albert',
        lastname: 'Alexander',
        email: 'albert.alexander@hussa.rs'
      },
      {
        id: 2,
        name: 'Philip',
        lastname: 'Hughes',
        email: 'philip.hughes@hussa.r'
      },
      {
        id: 3,
        name: 'Walter',
        lastname: 'Nelson',
        email: 'walter.nelson@hussa.rs'
      },
      {
        id: 4,
        name: 'Ashley',
        lastname: 'Hernandez',
        email: 'ashley.hernandez@hussa.rs'
      },
      {
        id: 5,
        name: 'Donna',
        lastname: 'Washington',
        email: 'donna.washington@hussa.rs'
      },
      {
        id: 6,
        name: 'Andrew',
        lastname: 'White',
        email: 'andrew.white@hussa.rs'
      },
      {
        id: 7,
        name: 'Sharon',
        lastname: 'Allen',
        email: 'sharon.allen@hussa.rs'
      },
      {
        id: 8,
        name: 'Russell',
        lastname: 'Parker',
        email: 'russell.parker@hussa.rs'
      },
      {
        id: 9,
        name: 'Janet',
        lastname: 'Stewart',
        email: 'janet.stewart@hussa.rs'
      }
    ];
  }

  getPaymentOptions(): PaymentOption[] {
    return [
      {
        value: EVENT_CONSTANTS.FORM.PAYMENT.FREE_EVENT.VALUE,
        name: EVENT_CONSTANTS.FORM.PAYMENT.FREE_EVENT.NAME,
        is_paid: false
      },
      {
        value: EVENT_CONSTANTS.FORM.PAYMENT.PAID_EVENT.VALUE,
        name: EVENT_CONSTANTS.FORM.PAYMENT.PAID_EVENT.NAME,
        is_paid: true
      },
    ]
  }
}