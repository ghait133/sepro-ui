import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import {NbCardModule} from '@nebular/theme';
import {ResizableModule} from 'angular-resizable-element';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [EmployeeComponent, EmployeesComponent],
  imports: [
    NbCardModule,
    CommonModule,
    EmployeeRoutingModule,
    ResizableModule,
    DragDropModule,
  ],
})
export class EmployeeModule { }
