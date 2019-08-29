import {Customer} from '../../customer-modul/customer-core/data/Customer.model';
import {Partner} from '../../partner-modul/Partner-core/partner.model';
import {Employee} from '../../employee-modul/employee-core/employee.model';
import {PartnerService} from '../../services-modul/services-core/service.model';
import {AppointmentStatus} from './appointment-status.model';

export class Appointment {
  id: number;
  customer: Customer;
  partner: Partner;
  employee: Employee;
  partnerService: PartnerService;
  status: AppointmentStatus;
  appointmentInfoId: number;
  date: string;
  start: string;
  end: string;
}

