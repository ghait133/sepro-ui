import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-app-customer',
  styleUrls: ['./customer.component.scss'],
  template: `
    <nb-card accent="info">
      <nb-card-header>Nebula</nb-card-header>
      <nb-card-body>
      </nb-card-body>
    </nb-card>
  `,
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
