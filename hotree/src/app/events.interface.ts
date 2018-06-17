export interface Categories {
  id: number;
  name: string; 
}

export interface TimeRanges extends Categories {
  value: string;
}

export interface Employee extends Categories {
  lastname: string;
  email: string;
}

export interface ResponseObject {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee?: number;
  reward: number;
  date: string; //YYYY-MM-DDTHH:mm 2018-01-19T15:15
  duration: number; //in seconds
  coordinator: {
    email: string;
    id: string;
  }
  // phone: string;
}

export interface PaymentOption {
  name: string;
  value: string;
  is_paid: boolean;
}