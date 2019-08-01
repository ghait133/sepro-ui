import { Observable } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  lastname: string;
  title: string;
  phonenumber: string;
  lastVisit: Date;
  systemCustomer: boolean;
}

export abstract class CustomerData {
// getter
  abstract getAllCustomer(): Customer[];
  abstract getCustomerById(id: number): Observable<Customer>;
  abstract getCustomerByPhoneNumber(phoneNumber: string): Observable<Customer>;

  abstract getCustomerName(id: number): Observable<string>;
  abstract getCustomerLastname(id: number): Observable<string>;
  abstract getCustomerTitle(id: number): Observable<string>;
  abstract getCustomerPhonenumber(id: number): Observable<string>;
  abstract getCustomerLastVisit(id: number): Observable<Date>;
  abstract getCustomerSystemState(id: number): Observable<boolean>;

  /* setter  */
  abstract setCustomer(customer: Customer);

// edit customer instance
  abstract setCustomerName(id: number, name: string);
  abstract setCustomerLastName(id: number, lastname: string);
  abstract setCustomerTitle(id: number, title: string);
  abstract setCustomerPhoneNumber(id: number, phoneNumber: string);
  abstract switchCustomerSytemState(id: number);
  abstract setCustomerSytemState(id: number, state: boolean);
}
