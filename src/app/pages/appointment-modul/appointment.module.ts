import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule, NbTooltipModule,
  NbTreeGridModule,
  NbUserModule,
  NbAlertModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {HttpClientModule} from '@angular/common/http';
import {AppointmentService} from './appointment-core/appointment.service';


@NgModule({
  declarations: [AppointmentComponent, AppointmentsComponent],
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    CommonModule,
    NbUserModule,
    NbIconModule,
    NbButtonModule,
    NbTooltipModule,
    NbAlertModule,
    HttpClientModule,
  ],
  providers: [ AppointmentService,
  ],
})
export class AppointmentModule { }
