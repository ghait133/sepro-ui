import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';



@NgModule({
  declarations: [ CustomerComponent, CustomersComponent, CustomerDetailsComponent],
  imports: [
  ],
})
export class CustomerModule { }
