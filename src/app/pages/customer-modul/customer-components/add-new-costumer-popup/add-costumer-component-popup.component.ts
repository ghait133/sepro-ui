import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NbDialogRef} from '@nebular/theme';
import {getDeepFromObject, NB_AUTH_OPTIONS} from '@nebular/auth';
import {Customer} from '../../customer-core/data/Customer.model';
import {Adresse} from '../../../commun/Adresse.medel';


@Component({
  selector: 'ngx-add-costumer-component-popup',
  templateUrl: './add-costumer-component-popup.component.html',
  styleUrls: ['./add-costumer-component-popup.component.scss'],
})
export class AddCostumerComponentPopupComponent implements OnInit {

  thirdForm: FormGroup;
  male: boolean;
  vornameinput: boolean;
  nachnameinput: boolean;
  strasseinput: boolean;
  strassennummer: boolean;
  plzinput: boolean;
  stadtinput: boolean;
  privatnummerinput: boolean;
  mobilnummerinput: boolean;
  emailinput: boolean;
  dienstnummerinput: boolean;
  emailString: string;
  mobileContactString: string;
  workContactString: string;
  privateContactString: string;
  strasseStadtString: string;
  strasseString: string;
  strasseNummerString: string;
  strassePLZString: string;
  vornameString: string;
  nachnameString: string;
  showMessages: any = {};
  strategy: string = '';
  customer: Customer = {};
  adresse: Adresse = {};
  constructor(
    private fb: FormBuilder,
    protected ref: NbDialogRef<AddCostumerComponentPopupComponent>,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    ) {
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
  }
  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
  dismiss() {
    this.ref.close();
  }
  firstForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('' , Validators.required),
    gender: new FormControl('', Validators.required),
    city: new FormControl(''),
    postCode: new FormControl(''),
    houseNumber: new FormControl(''),
    street: new FormControl(''),
  });

  secondForm = new FormGroup({
    telNumber: new FormControl('', Validators.required),
    email: new FormControl(''),
  });
  get firstName(): any {return this.firstForm.get('firstName'); }
  get lastName(): any {return this.firstForm.get('lastName'); }
  get gender(): any {return this.firstForm.get('gender'); }
  get city(): any {return this.firstForm.get('city'); }
  get postCode(): any {return this.firstForm.get('postCode'); }
  get houseNumber(): any {return this.firstForm.get('houseNumber'); }
  get street(): any {return this.firstForm.get('street'); }
  get telNumber(): any {return this.secondForm.get('telNumber'); }
  get email(): any {return this.secondForm.get('email'); }
  ngOnInit() {
    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    console.log(this.firstName.value);
    this.customer.firstName = this.firstName.value;
    this.customer.lastName = this.lastName.value;
    this.customer.gender = this.gender.value;
    this.firstForm.markAsDirty();
    this.adresse.postCode = this.postCode.value;
    this.adresse.houseNumbre = this.houseNumber.value;
    this.adresse.cityName = this.city.value;
    this.adresse.streetName = this.street.value;
    this.adresse.countryName = 'Germany';
    this.customer.adresse = this.adresse;
  }

  onSecondSubmit() {
    this.customer.email = this.email.value;
    this.customer.telNumbre = this.telNumber.value;
    console.log(this.customer);
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }


}

