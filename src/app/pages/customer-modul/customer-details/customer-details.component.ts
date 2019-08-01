import { Component, OnInit } from '@angular/core';
import { HEROES } from '../customer-core/mock/mock-hero';

@Component({
  selector: 'ngx-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
