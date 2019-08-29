import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
  declarations: [EmployeeComponent, EmployeesComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ],
})
export class EmployeeModule { }
