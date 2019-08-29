import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbTreeGridModule,
  NbUserModule,
  NbDialogModule,
  NbAccordionModule,
  NbInputModule,
  NbStepperModule,
  NbSelectModule,
  NbAlertModule,
  NbCheckboxModule,
  NbRadioModule,
} from '@nebular/theme';
import {CommonModule} from '@angular/common';
import { InfoPopupComponent } from './customer-components/info-popup/info-popup.component';
import {
  CostumerHistoryPopupComponent,
} from './customer-components/costumer-history-popup/costumer-history-popup.component';
import {CustomerService} from './customer-core/utils/customer.service';
import {HttpClientModule} from '@angular/common/http';
import {
  AddCostumerComponentPopupComponent,
} from './customer-components/add-new-costumer-popup/add-costumer-component-popup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ImportCustomerPopupComponent,
} from './customer-components/import-customer-popup/import-customer-popup.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {
  GlobaleInfoSmarttableComponent,
} from './customer-components/tables/globale-info-smarttable/globale-info-smarttable.component';
import {
  DauerwelleSmartTableComponent,
} from './customer-components/tables/dauerwelle-smart-table/dauerwelle-smart-table.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    InfoPopupComponent,
    CostumerHistoryPopupComponent,
    AddCostumerComponentPopupComponent,
    ImportCustomerPopupComponent,
    GlobaleInfoSmarttableComponent,
    DauerwelleSmartTableComponent,
  ],
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
    HttpClientModule,
    NbInputModule,
    NbStepperModule,
    NbSelectModule,
    NbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    NbCheckboxModule,
    NbRadioModule,
  ],
  providers: [CustomerService],
  entryComponents: [
    InfoPopupComponent,
    CostumerHistoryPopupComponent,
    AddCostumerComponentPopupComponent,
    ImportCustomerPopupComponent,
  ],
})
export class CustomerModule { }
