import {FarbBehandlung} from './farbBehandlung.model';
import {DauerwelleBehandlung} from './dauerwelleBehandlung.model';
import {HaarpflegeBehandlung} from './haarpflegeBehandlung.model';
import {KosmetikBehandlung} from './kosmetikBehandlung.model';
import {Verkauf} from './verkauf.model';

export class AppointmentInfo {
  id?: number;
  partnerId?: number;
  appointmentId?: number;
  customerId?: number;
  frisur?: string;
  farbVeraenderung?: FarbBehandlung;
  dauerwelleBehandlung?: DauerwelleBehandlung;
  haarpflegeBehandlung?: HaarpflegeBehandlung;
  kosmetikBehandlung?: KosmetikBehandlung;
  verkauf?: Verkauf;
  bemerkung?: string;
  preis?: number;
}
