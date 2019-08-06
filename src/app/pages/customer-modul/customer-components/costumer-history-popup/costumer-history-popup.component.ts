import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {CostumerHistoryPopupData} from '../../customer-core/data/costumer-history-popup-data';

@Component({
  selector: 'ngx-costumer-history-popup',
  templateUrl: './costumer-history-popup.component.html',
  styleUrls: ['./costumer-history-popup.component.scss'],
})
export class CostumerHistoryPopupComponent implements OnInit {


  ngOnInit() {
  }
  @Input() title: string;
  @Input() costumerHistoryData: CostumerHistoryPopupData[];

  constructor(protected ref: NbDialogRef<CostumerHistoryPopupComponent>) {}

  dismiss() {
    this.ref.close();
  }
}


