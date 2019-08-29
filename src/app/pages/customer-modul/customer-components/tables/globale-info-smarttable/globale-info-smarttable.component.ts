import {Component, Input, OnInit} from '@angular/core';
import {GlobalInfo} from '../../../customer-core/data/globalInfo.model';
import {CustomerService} from '../../../customer-core/utils/customer.service';

@Component({
  selector: 'ngx-globale-info-smarttable',
  templateUrl: './globale-info-smarttable.component.html',
  styleUrls: ['./globale-info-smarttable.component.scss'],
})
export class GlobaleInfoSmarttableComponent implements OnInit {

  @Input() customerId: number;
  data: GlobalInfo;
  edit: boolean;
  constructor(private customerService: CustomerService) {
  }
  getGlobalInfo() {
    this.customerService.getGlobalInfoByCustomerId(+this.customerId)
      .subscribe(globalInfo => {
        console.log(globalInfo);
        this.data = globalInfo;
        console.log(this.data);
      });
  }
  ngOnInit() {
    this.getGlobalInfo();
    console.log(this.data);
  }

}
