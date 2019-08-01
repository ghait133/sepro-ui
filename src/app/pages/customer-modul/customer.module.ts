import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {NbActionsModule, NbCardModule, NbLayoutModule, NbListModule, NbUserModule} from '@nebular/theme';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [ CustomerComponent, CustomersComponent, CustomerDetailsComponent],
  imports: [
    NbCardModule,
    RouterModule,
    NbListModule,
    CommonModule,
    NbUserModule,
    NbActionsModule,
    NbLayoutModule,
  ],
})
export class CustomerModule { }
