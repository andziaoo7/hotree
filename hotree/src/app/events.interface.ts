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

export interface Coordinator {
  email: string;
  id: string;
}

export interface EventObject {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee: number;
  reward: number;
  date: string;
  duration: number;
  coordinator: Coordinator;
}

export interface PaymentOption {
  name: string;
  value: string;
  is_paid: boolean;
}

export interface FormDate {
  date: string;
  time: string;
  timeIndication: string;
}