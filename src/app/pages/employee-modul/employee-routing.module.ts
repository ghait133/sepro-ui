import { NgModule } from '@angular/core';
import {EmployeeComponent} from './employee.component';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';


const routes: Routes = [{
  path: '',
  component: EmployeeComponent,
  children: [
    {
      path: '',
      component: EmployeesComponent,
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
export class EmployeeRoutingModule { }
