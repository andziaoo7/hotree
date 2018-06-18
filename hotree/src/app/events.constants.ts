export const EVENT_CONSTANTS = {
  FORM: {
    TITLE: 'title',
    EVENT_DESCRIPTION: 'eventDescription',
    CATEGORY: 'category',
    PAYMENT: {
      NAME: 'payment',
      FREE_EVENT: {
        NAME: 'Free event',
        VALUE: 'freeEvent'
      },
      PAID_EVENT: { 
        NAME: 'Paid event',
        VALUE: 'paidEvent'
      },
      FEE: 'fee'
    },
    REWARD: 'reward',
    RESPONSIBLE: 'responsible',
    EMAIL: 'email',
    STARTS_ON: {
      NAME: 'startsOn',
      DATE: 'date',
      TIME: 'time',
      TIME_INDICATION: {
        NAME: 'timeIndication',
        AM: 'am',
        PM: 'pm'
      }
    },
    DURATION: 'duration'
  },
  CATEGORIES: {
    CYCLING: 'Cycling',
    HIKING: 'Hiking',
    COOKING: 'Cooking',
    ROCK_CLIMBING: 'Rock climbing',
    YOGA: 'Yoga',
    FENCING: 'Fencing',
    SWIMMING: 'Swimming',
    BADMINTON: 'Badminton',
    RUNNING: 'Running',
    DANCE: 'Dance'
  },
  TIME_RANGES: {
    AM: {
      NAME: 'AM',
      VALUE: 'am'
    },
    PM: {
      NAME: 'PM',
      VALUE: 'pm'
    }
  },
  REGEX_EMAIL_PATTERN: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};