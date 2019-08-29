import {Adresse} from '../../commun/Adresse.medel';
import {Partner} from '../../partner-modul/Partner-core/partner.model';

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  telNumbre: string;
  gender:  string;
  birthdate: string;
  user_id?: number;
  adresse: Adresse;
  partner?: Partner;

}
