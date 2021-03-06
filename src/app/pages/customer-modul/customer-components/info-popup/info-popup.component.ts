import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {Customer} from '../../customer-core/data/Customer.model';

@Component({
  selector: 'ngx-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.scss'],
})
export class InfoPopupComponent implements OnInit {


  ngOnInit() {
  }
  @Input() title: string;

  @Input() user: Customer;
  @Input() closeButton: boolean = true;
  constructor(protected ref: NbDialogRef<InfoPopupComponent>) {}

  dismiss() {
    this.ref.close();
  }
}

