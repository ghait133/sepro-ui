import { Component, OnInit } from '@angular/core';
import {
  NbDialogService,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';
import {CustomerService} from '../../customer-modul/customer-core/utils/customer.service';
import {Customer} from '../../customer-modul/customer-core/data/Customer.model';
import {AppointmentService} from '../appointment-core/appointment.service';
import {InfoPopupComponent} from '../../customer-modul/customer-components/info-popup/info-popup.component';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  employee?: string;
  day?:  string;
  appointmentId?: number;
  customerName?: string;
  service?: string;
  customer: Customer;
  persons?: Persons;
  date?: Date;
  info?: Infos;
  aktions?: any;
}
interface Persons {
  customer: string;
  employee: string;
  service: string;
}
interface Date {
  date: string;
  start: string;
  end: string;
}
interface Infos {
  infoId: number;
  customerId: number;
}
@Component({
  selector: 'ngx-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  customer$: Customer;
  personsColumn = 'persons';
  defaultColumns = ['date', 'info', 'aktion'];
  dateColumn = 'date';
  infoColumn = 'info';
  aktionColumn = 'aktion';
  allColumns = [this.personsColumn, ...this.defaultColumns];
  dataSource: NbTreeGridDataSource<FSEntry>;


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
              private dialogService: NbDialogService,
              private appointmentService: AppointmentService,
              private customerService: CustomerService,
             ) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  /*user: Customer = {
  id: 1,
  name: 'Hans',
  lastname: 'Mustermann',
  title: ' ',
  phonenumber: '01792445876',
  lastVisit: Date.prototype,
  systemCustomer: true,
};

  }*/
  openInfoPopup(user: Customer) {
    this.dialogService.open(InfoPopupComponent, {
      context: {
        title: 'Informationen zu ' + user.gender + user.firstName + user.lastName + ':',
        user: user,
      },
    });
  }
  private data: TreeNode<FSEntry>[];
  getAppointment() {
    const data: TreeNode<FSEntry>[] = new Array();
    this.appointmentService.getappointments()
      .subscribe(
        appointments => {
          appointments.forEach(function (appointment) {
            const persons: Persons = {
              customer: appointment.customer.firstName + ' ' + appointment.customer.lastName,
              employee: appointment.employee.firstName + ' ' + appointment.employee.lastName,
              service: appointment.partnerService.label,
            };

            const date: Date = {
              date: appointment.date,
              start: appointment.start,
              end: appointment.end,
            };
            const info: Infos = {
              customerId: appointment.customer.id,
              infoId: appointment.appointmentInfoId,
            };
            const entry: TreeNode<FSEntry> = {
              data: {
                employee: persons.employee,
                customer: appointment.customer,
                day: date.date,
                customerName: persons.customer,
                service: persons.service,
                appointmentId: appointment.id,
                persons : persons,
                date : date,
                info : info,
              },
            };
            data.push(entry);
          });
          this.data = data;
          this.dataSource = this.dataSourceBuilder.create(this.data);
        },
      );
  }
  getCustomer(): Customer {
    this.customerService.getCustomerById(113)
      .subscribe(
        result => {
          this.customer$ = result;
        },
      );
    return this.customer$;
  }

  ngOnInit() {
    this.getCustomer();
    this.getAppointment();
  }

}
