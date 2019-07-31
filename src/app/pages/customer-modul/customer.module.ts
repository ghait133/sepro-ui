import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {NbCardModule, NbListModule} from '@nebular/theme';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [ CustomerComponent, CustomersComponent, CustomerDetailsComponent],
  imports: [
    NbCardModule,
    RouterModule,
    NbListModule,
    CommonModule,
  ],
})
export class CustomerModule { }
