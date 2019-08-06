import { Injectable } from '@angular/core';
import {COSTUMERHISTORYMOCK} from '../mock/costumerHistoryPopup-mock';
import {CostumerHistoryPopupData} from '../data/costumer-history-popup-data';


@Injectable({
  providedIn: 'root',
})
export class CustomerHistoryDataService {

  getCostumerHistoryData(): CostumerHistoryPopupData[] {
    return COSTUMERHISTORYMOCK;
  }

  constructor() { }
}
