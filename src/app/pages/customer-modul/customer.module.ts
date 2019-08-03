import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {
  NbActionsModule, NbButtonModule,
  NbCardModule, NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbTreeGridModule,
  NbUserModule,
  NbDialogModule, NbAccordionModule,
} from '@nebular/theme';
import {CommonModule} from '@angular/common';
import { InfoPopupComponent } from './customer-components/info-popup/info-popup.component';
import {
  CostumerHistoryPopupComponent,
} from './customer-components/costumer-history-popup/costumer-history-popup.component';


@NgModule({
  declarations: [ CustomerComponent, CustomersComponent, CustomerDetailsComponent, InfoPopupComponent,
    CostumerHistoryPopupComponent],
  imports: [
    NbCardModule,
    RouterModule,
    NbListModule,
    CommonModule,
    NbUserModule,
    NbActionsModule,
    NbLayoutModule,
    NbTreeGridModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbAccordionModule,
  ],
  entryComponents: [
    InfoPopupComponent,
    CostumerHistoryPopupComponent,
  ],
})
export class CustomerModule { }
