import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerComponent} from './customer.component';
import {AuthGuard} from '../../@core/auth/auth-guard.service';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
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
