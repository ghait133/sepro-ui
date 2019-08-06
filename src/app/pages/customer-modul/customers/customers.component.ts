import { Component, OnInit} from '@angular/core';
import {
  NbDialogService,
} from '@nebular/theme';

import { Customer } from '../customer-core/data/customer';

import {CustomerService} from '../customer-core/utils/customer.service';
import {InfoPopupComponent} from '../customer-components/info-popup/info-popup.component';
import {
  CostumerHistoryPopupComponent,
} from '../customer-components/costumer-history-popup/costumer-history-popup.component';
import {CostumerHistoryPopupData} from '../customer-core/data/costumer-history-popup-data';
import { CustomerHistoryDataService } from '../customer-core/utils/customer-history-data.service';


@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  /*
  public id: string;


  // TreeGrid-Implementierung
  customColumn = 'Name';
  defaultColumns = [ 'Telefonnummer', 'letzter Besuch', 'Terminbuchung' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }
*/

  heroes: Customer[];
  getAllHeroes(): void {
    this.heroes = this.costumerService.getAllHeroes();
  }

  custumerHistoryData: CostumerHistoryPopupData[];
  getCostumerHistoryData(): CostumerHistoryPopupData[] {
    this.custumerHistoryData = this.costumerHistoryService.getCostumerHistoryData();
    return this.custumerHistoryData;
  }

  costumerID_HistoryData: CostumerHistoryPopupData[];
  historyData: CostumerHistoryPopupData[];
  historyListLength: number;
  historyListIteration: number;
  getCostumerID_HistoryData(user: Customer): CostumerHistoryPopupData[] {
    this.historyData = this.getCostumerHistoryData();
    this.historyListLength = this.historyData.length;
    for (
      this.historyListIteration = 0; this.historyListIteration < this.historyListLength; this.historyListIteration++ ) {
      if (user.id === this.historyData[this.historyListIteration].customer_id) {
        this.costumerID_HistoryData.push(this.historyData[this.historyListIteration]);
      }
       return this.costumerID_HistoryData;
    }
  }
  constructor(private costumerService: CustomerService, private dialogService: NbDialogService,
              private costumerHistoryService: CustomerHistoryDataService) {}
  ngOnInit() {
    this.getAllHeroes();
    this.getCostumerHistoryData();
  }

  openInfoPopup(user: Customer) {
    this.dialogService.open(InfoPopupComponent, {
      context: {
        title: 'Informationen zu ' + user.title + user.name + user.lastname + ':',
        user: user,
      },
    });
  }

  customerHistoryPopupData: CostumerHistoryPopupData[];
  openCustomerHistoryPopup(user: Customer ) {
    this.dialogService.open(CostumerHistoryPopupComponent, {
      context: {
        title: 'This is CostumerHistoryPopupComponent',
        costumerHistoryData: user,
      },
    });
  }

}
