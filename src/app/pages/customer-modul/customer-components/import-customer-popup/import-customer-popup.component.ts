import { Component, OnInit } from '@angular/core';
import {Customer} from '../../customer-core/data/Customer.model';
import {CustomerService} from '../../customer-core/utils/customer.service';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-import-customer-popup',
  templateUrl: './import-customer-popup.component.html',
  styleUrls: ['./import-customer-popup.component.scss'],
})
export class ImportCustomerPopupComponent implements OnInit {
  email: string;
  customer: Customer;
  result: boolean = false;
  error: boolean = false;
  add: boolean = false;
  adderror: boolean = false;
  constructor(
    private customerService: CustomerService,
    protected ref: NbDialogRef<ImportCustomerPopupComponent>,
  ) { }

  ngOnInit() {
  }
  dismiss() {
    this.ref.close();
  }
  cancel() {
    this.result = false;
    this.error = false;
    console.log('errsor: ' + this.error + '; Result: ' + this.result);
  }
  addCustomer(customer: Customer) {
    this.customerService.addCustomer(customer)
      .subscribe(
        result => {
          this.error = false;
          this.result = false;
          this.adderror = false;
          this.add = true;
          console.log(result);
        },
        error1 => {
          this.adderror = true;
          console.log(error1);
        },
      );
  }
  findCustomer() {
    this.customerService.getCustomerByEmail(this.email)
      .subscribe(
        customer => {
          this.error = false;
          this.add = false;
          this.adderror = false;
          this.result = true;
          this.customer = customer;
          console.log(customer);
      },
        error1 => {
          this.add = false;
          this.result = false;
          this.adderror = false;
          this.error = true;
        });
    console.log(this.email);
  }
}
