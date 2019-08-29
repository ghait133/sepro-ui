import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {Customer} from '../data/Customer.model';
import {GlobalInfo} from '../data/globalInfo.model';
import {AppointmentInfo} from '../data/appointmentInfo.model';





@Injectable({
  providedIn: 'root',
})
export class CustomerService {


  token: string;
  constructor(
    protected http: HttpClient,
    private authService: NbAuthService,
    private router: Router) { }

  getCustomerNameById(customer_id: number): string {
    let customerName: string;
      this.getCustomerById(customer_id)
        .subscribe(data => {
            customerName = data.firstName + ' ' + data.lastName;
          },
          error1 => {
            console.log(error1);
          },
          () => {
            return customerName;
          });
    return customerName;
  }
  getcustomers() {
    const Url = 'http://localhost:8071/api/partner/allcustomers';
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.get<Customer[]>(Url, {headers: header});
  }
   getCustomerById(customerId: number) {
    const url: string = 'http://localhost:8071/api/customer/getcustomerbyid/' + customerId;
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.get<Customer>(url , {headers: header});
  }
  getCustomerByEmail(customerEmail: any) {
    const url: string = 'http://localhost:8071/api/customer/getcustomerbyemail?customerEmail=' + customerEmail;
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.get<Customer>( url , {headers: header});
  }

  addCustomer(customer: Customer) {
    const url: string = 'http://localhost:8071/api/partner/addcustomer';
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.post(url, customer, {headers: header});
  }
  getGlobalInfoByCustomerId(customerId: number) {
    const url: string = 'http://localhost:8071/api/customerinfos/globalinfos/' + customerId;
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.get<GlobalInfo>( url , {headers: header});
  }
  getAppointmentInfoByCustomerId(customerId: number) {
    const url: string = 'http://localhost:8071/api/customerinfos/appointmentinfos/' + customerId;
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.get<AppointmentInfo []>( url , {headers: header});
  }
  updateCustomer(customer: Customer) {
    const url: string = 'http://localhost:8071/api/customer/update/';
    const header: HttpHeaders = this.buildAuthHeader();
    return this.http.post( url , customer , {headers: header});
  }
  private myGetToken(): void {
    this.authService.getToken()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.token = token.getPayload().access_token;
        }
      });
  }
  protected buildAuthHeader(): any {
    this.myGetToken();
      if (this.authService.isAuthenticated()) {
        return new HttpHeaders(
          {
            'Content-Type' : 'application/json',
            'Authorization': 'bearer ' + this.token,
          },
        );
      }else {
        this.router.navigate(['auth/login']);
      }
  }
}
