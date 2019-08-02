import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.scss'],
})
export class InfoPopupComponent implements OnInit {


  ngOnInit() {
  }
  @Input() title: string;

  constructor(protected ref: NbDialogRef<InfoPopupComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
