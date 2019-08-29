import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import {AppointmentsComponent} from './appointment-modul/appointments/appointments.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'kunden',
      loadChildren: () => import('./customer-modul/customer.module')
        .then(m => m.CustomerModule),
    },
    {
      path: 'employees',
      loadChildren: () => import('./employee-modul/employee.module')
        .then(m => m.EmployeeModule),
    },
    {
      path: 'appointments',
      children: [
        {
          path: '',
          component: AppointmentsComponent,
        },
      ],
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
