import { Component, OnInit, Input, TemplateRef  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  NbDialogService,
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';

import { CustomerData } from '../customer-core/data/customer';
import { Customer } from '../customer-core/data/customer';
import {HEROES} from '../customer-core/mock/mock-hero';
import {CustomerService} from '../customer-core/utils/customer.service';
import {InfoPopupComponent} from '../customer-components/info-popup/info-popup.component';


@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  public id: string;

  heroes: Customer[];

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


  getAllHeroes(): void {
    this.heroes = this.costumerService.getAllHeroes();
  }
  constructor(private costumerService: CustomerService, private dialogService: NbDialogService) {}
  ngOnInit() {
    this.getAllHeroes();
  }

  open() {
    this.dialogService.open(InfoPopupComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }

}
