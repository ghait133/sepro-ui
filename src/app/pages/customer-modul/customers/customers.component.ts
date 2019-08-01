import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { CustomerData } from '../customer-core/data/customer';
import { Customer } from '../customer-core/data/customer';
import {HEROES} from '../customer-core/mock/mock-hero';
import {CustomerService} from '../customer-core/utils/customer.service';


@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  public id: string;

  heroes: Customer[];

  getAllHeroes(): void {
    this.heroes = this.costumerService.getAllHeroes();
  }
  constructor(private costumerService: CustomerService) {}
  ngOnInit() {
    this.getAllHeroes();
  }

}
