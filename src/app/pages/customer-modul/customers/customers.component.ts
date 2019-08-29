import { Component, OnInit} from '@angular/core';
import {
  NbDialogService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder,
} from '@nebular/theme';


import {CustomerService} from '../customer-core/utils/customer.service';
import {InfoPopupComponent} from '../customer-components/info-popup/info-popup.component';
import {
  CostumerHistoryPopupComponent,
} from '../customer-components/costumer-history-popup/costumer-history-popup.component';
import {Customer} from '../customer-core/data/Customer.model';
import {
  AddCostumerComponentPopupComponent,
} from '../customer-components/add-new-costumer-popup/add-costumer-component-popup.component';
import {
  ImportCustomerPopupComponent,
} from '../customer-components/import-customer-popup/import-customer-popup.component';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  email: string;
  name: string;
  plz: string;
  telnumber: string;
  data?: Data;
  info?: Infos;
  actions?: any;
}

interface Data {
  name: string;
  email: string;
  phone: string;
}
interface Infos {
  customer: Customer;
}
@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {


  defaultColumns = ['data', 'info', 'action'];
  dataColumn = 'data';
  infoColumn = 'info';
  actionColumn = 'action';
  dataSource: NbTreeGridDataSource<FSEntry>;
  constructor(private customerService: CustomerService,
              private dialogService: NbDialogService,
              private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {}

  private data: TreeNode<FSEntry>[];
  getcustomers() {
    const datac: TreeNode<FSEntry>[] = new Array();
    this.customerService.getcustomers()
      .subscribe(
        result => {
          const customers: Customer[] = result['customers'];
          // console.log(customers);
          customers.forEach(function (customer) {
            console.log(customer);
            const data: Data = {
              name: customer.firstName + ' ' + customer.lastName,
              email: customer.email,
              phone: customer.telNumbre,
            };
            const info: Infos = {
              customer: customer,
            };
            const entry: TreeNode<FSEntry> = {
              data: {
                email: data.email,
                name: data.name,
                plz: info.customer.adresse.postCode,
                telnumber: data.phone,
                data: data,
                info: info,
                actions: customer.id,
              },
            };
            datac.push(entry);
          });
          this.data = datac;
          this.dataSource = this.dataSourceBuilder.create(this.data);
        },
      );
  }

  ngOnInit() {
    this.getcustomers();
  }

  openInfoPopup(user: Customer) {
    this.dialogService.open(InfoPopupComponent, {
      context: {
        title: 'Informationen zu ' + user.gender + user.firstName + user.lastName + ':',
        user: user,
      },
    });
  }

  openAddCostumerComponent() {
    this.dialogService.open(AddCostumerComponentPopupComponent, {
      context: {
      },
    });
  }
  openImportCustomer() {
    this.dialogService.open(ImportCustomerPopupComponent);
  }
  openCustomerHistoryPopup(user: Customer ) {
    this.dialogService.open(CostumerHistoryPopupComponent, {
      context: {
        title: 'This is CostumerHistoryPopupComponent',
      },
    });
  }

}
