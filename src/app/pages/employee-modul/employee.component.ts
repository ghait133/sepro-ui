import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employee',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
