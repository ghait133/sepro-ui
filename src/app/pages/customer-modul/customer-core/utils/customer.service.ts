import { Injectable } from '@angular/core';
import {HEROES} from '../mock/mock-hero';
import {Customer} from '../data/customer';




@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  getAllHeroes(): Customer[] {
    return HEROES;
  }
  constructor() { }
}
