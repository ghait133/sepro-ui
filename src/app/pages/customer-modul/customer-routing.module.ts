import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerComponent} from './customer.component';

const routes: Routes = [{
  path: '',
  component: CustomerComponent,
  children: [
      {
        path: '',
        component: CustomersComponent,
      },
      {
        path: ':id',
        component: CustomerDetailsComponent,
      },
  ],
}];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
