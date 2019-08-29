import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-app-customer',
  styleUrls: ['./customer.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
