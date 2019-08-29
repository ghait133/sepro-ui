import {Adresse} from '../../commun/Adresse.medel';

export class Partner {
  id: number;
  companyShortName: string;
  companyLongName: Partner;
  email: string;
  telNumber: number;
  adresse: Adresse;
  user_id?: number;
  sector_id: number;
}
