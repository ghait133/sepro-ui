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
  constructor(private costumerService: CustomerService, private dialogService: NbDialogService) {}
  ngOnInit() {
    this.getAllHeroes();
  }

  openInfoPopup(user: Customer) {
    this.dialogService.open(InfoPopupComponent, {
      context: {
        title: 'Informationen zu ' + user.title + user.name + user.lastname + ':',
        user: user,
      },
    });
  }

  openCustomerHistoryPopup() {
    this.dialogService.open(CostumerHistoryPopupComponent, {
      context: {
        title: 'This is CostumerHistoryPopupComponent',
      },
    });
  }

}
