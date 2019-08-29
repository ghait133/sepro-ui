import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../customer-core/data/Customer.model';
import {CustomerService} from '../customer-core/utils/customer.service';
import {FarbBehandlung} from '../customer-core/data/farbBehandlung.model';
import {DauerwelleBehandlung} from '../customer-core/data/dauerwelleBehandlung.model';
import {HaarpflegeBehandlung} from '../customer-core/data/haarpflegeBehandlung.model';
import {KosmetikBehandlung} from '../customer-core/data/kosmetikBehandlung.model';
import {Verkauf} from '../customer-core/data/verkauf.model';

@Component({
  selector: 'ngx-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerId: string;
  customer: Customer;
  editStammdaten: boolean = false;
  editAnschrift: boolean = false;

  farbVeraenderung: FarbBehandlung []  = [];
  dauerwelleBehandlung: DauerwelleBehandlung [] = [];
  haarpflegeBehandlung: HaarpflegeBehandlung [] = [];
  kosmetikBehandlung: KosmetikBehandlung [] = [];
  verkauf: Verkauf [] = [];

  farbVeraenderungColumns: string [] = [];
  defaultFarbVeraenderungColumns: string [] = [];
  dauerwelleBehandlungColumns: string [] = [];
  defaultdauerwelleBehandlungColumns: string [] = [];
  haarpflegeBehandlungColumns: string [] = [];
  defaulthaarpflegeBehandlungColumns: string [] = [];
  kosmetikBehandlungColumns: string [] = [];
  defaultkosmetikBehandlungColumns: string [] = [];
  verkaufColumns: string [] = [];
  defaultverkaufColumns: string [] = [];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) {
    this.customerId = this.route.snapshot.paramMap.get('id');
  }
  updateForm(form: any) {
    const list = form.getElementsByTagName('input');
    const formName: string = form.getAttribute('name');
    this.customerService.getCustomerById(+this.customerId)
      .subscribe(customer => {
        this.customer = customer;
        for (const item of list) {
          if (formName === 'stammdatenForm') {
            item.value = this.customer[item.id];
          }else {
            item.value = this.customer.adresse[item.id];
          }
        }
        console.log(this.customer);
      });
  }
  updateStammdatenForm(form: any) {
    this.editStammdaten = false;
    this.updateForm(form);
  }
  updateAnschriftForm(form: any) {
    this.editAnschrift = false;
    this.updateForm(form);
  }
  setCustomer(form: any) {
    this.customerService.updateCustomer(this.customer)
      .subscribe(
        result => {
          this.updateForm(form);
          console.log('succecc');
        },
        error1 => {
          this.updateForm(form);
          console.log('failed');
        },
      );
  }

  setstammdaten(form: any) {
    this.editStammdaten = false;
    this.setCustomer(form);
  }

  setAnschrift(form: any) {
    console.log(this.customer);
    this.editAnschrift = false;
    this.setCustomer(form);
  }

  getCustomerById() {
    this.customerService.getCustomerById(+this.customerId)
      .subscribe(customer => {
        this.customer = customer;
      });
  }
  getAppointmentInfo() {
    const self = this;
    this.customerService.getAppointmentInfoByCustomerId(+this.customerId)
      .subscribe(
        appointmentInfos => {
          appointmentInfos.forEach(function (info) {
            if (info.farbVeraenderung) {
              info.farbVeraenderung.apoointmentInfoId = info.id;
              self.farbVeraenderung.push(info.farbVeraenderung);
              self.farbVeraenderungColumns = Object.keys(self.farbVeraenderung[0]);
              self.defaultFarbVeraenderungColumns = Object.keys(self.farbVeraenderung[0]);
              const index = self.farbVeraenderungColumns.indexOf('apoointmentInfoId');

              if (index > -1) {
                self.farbVeraenderungColumns.splice(index, 1);
                self.defaultFarbVeraenderungColumns.splice(index, 1);
              }
            }
            if (info.dauerwelleBehandlung) {
              info.dauerwelleBehandlung.apoointmentInfoId = info.id;
              self.dauerwelleBehandlung.push(info.dauerwelleBehandlung);
              self.dauerwelleBehandlungColumns  = Object.keys(self.dauerwelleBehandlung[0]);
              self.defaultdauerwelleBehandlungColumns  = Object.keys(self.dauerwelleBehandlung[0]);
              const index = self.dauerwelleBehandlungColumns.indexOf('apoointmentInfoId');

              if (index > -1) {
                self.dauerwelleBehandlungColumns.splice(index, 1);
                self.defaultdauerwelleBehandlungColumns.splice(index, 1);
              }
            }
            if (info.haarpflegeBehandlung) {
              info.haarpflegeBehandlung.apoointmentInfoId = info.id;
              self.haarpflegeBehandlung.push(info.haarpflegeBehandlung);
              self.haarpflegeBehandlungColumns  = Object.keys(self.haarpflegeBehandlung[0]);
              self.defaulthaarpflegeBehandlungColumns  = Object.keys(self.haarpflegeBehandlung[0]);
              const index = self.haarpflegeBehandlungColumns.indexOf('apoointmentInfoId');

              if (index > -1) {
                self.haarpflegeBehandlungColumns.splice(index, 1);
                self.defaulthaarpflegeBehandlungColumns.splice(index, 1);
              }
            }
            if (info.kosmetikBehandlung) {
              info.kosmetikBehandlung.apoointmentInfoId = info.id;
              self.kosmetikBehandlung.push(info.kosmetikBehandlung);
              self.kosmetikBehandlungColumns  = Object.keys(self.kosmetikBehandlung[0]);
              self.defaultkosmetikBehandlungColumns  = Object.keys(self.kosmetikBehandlung[0]);
              const index = self.kosmetikBehandlungColumns.indexOf('apoointmentInfoId');

              if (index > -1) {
                self.kosmetikBehandlungColumns.splice(index, 1);
                self.defaultkosmetikBehandlungColumns.splice(index, 1);
              }
            }
            if (info.verkauf) {
              info.verkauf.apoointmentInfoId = info.id;
              self.verkauf.push(info.verkauf);
              self.verkaufColumns  = Object.keys(self.verkauf[0]);
              self.defaultverkaufColumns  = Object.keys(self.verkauf[0]);
              const index = self.verkaufColumns.indexOf('apoointmentInfoId');

              if (index > -1) {
                self.verkaufColumns.splice(index, 1);
                self.defaultverkaufColumns.splice(index, 1);
              }
            }
          });
        },
      );
  }
  ngOnInit() {
    this.getAppointmentInfo();
    this.getCustomerById();
  }

}
