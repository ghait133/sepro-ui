import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {CustomerModule} from './customer-modul/customer.module';
import {AppointmentModule} from './appointment-modul/appointment.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    CustomerModule,
    AppointmentModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
