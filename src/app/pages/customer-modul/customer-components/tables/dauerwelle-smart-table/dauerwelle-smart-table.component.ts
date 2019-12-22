import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-dauerwelle-smart-table',
  templateUrl: './dauerwelle-smart-table.component.html',
  styleUrls: ['./dauerwelle-smart-table.component.scss'],
})
export class DauerwelleSmartTableComponent implements OnInit {
  constructor() { }
  edit: boolean[] = [];
  @Input() data: any[];
  @Input()columns: string [];
  qdata: any [] = [
    {
      datum: '13.09.2019',
      vorbehandlung: '',
      produkt: 'xycvy',
      nachbehandlung: 'dkgjsig',
      datum1: '13.09.2019',
      vorbehandlung1: 'oberkopf',
      produkt1: 'xycvy',
      nachbehandlung1: 'dkgjsigehsgohwerotuehgouhegiuhegriuehgruheorguhoergiheohgoeihgoewhgjewhgojehgehgoehoehgoewihg',
      datumw: '13.09.2019',
      vorbehandlung2: 'oberkopf',
      produkt2: 'xycvy',
      nachbehandlung2: 'dkgjsig',
    },
    {
      datum: '13.09.2019',
      vorbehandlung: 'oberkopf',
      produkt: 'xycvy',
      nachbehandlung: 'dkgjsig',
      datum1: '13.09.2019',
      vorbehandlung1: 'oberkopf',
      produkt1: 'xycvy',
      nachbehandlung1: 'dkgjsigehsgohwerotuehgouhegiuhegriuehgruheorguhoergiheohgoeihgoewhgjewhgojehgehgoehoehgoewihg',
      datumw: '13.09.2019',
      vorbehandlung2: 'oberkopf',
      produkt2: 'xycvy',
      nachbehandlung2: 'dkgjsig',
    },
  ];
  editfields: any [] = [];

   // columns: string [] = Object.keys(this.data[0]);

  test(id: number) {
    document.querySelectorAll('[data-target]')
      .forEach(function (el) {
        el.classList.remove('heilight');
      });
    document.querySelectorAll('[data-target=\'' + id + '\']').forEach(function (el) {
      el.classList.add('heilight');
    });
    console.log(document.querySelectorAll('[data-target=\'' + id + '\']'));
  }
  ngOnInit() {
    console.log(this.data);
    const self = this;
    this.columns.forEach( function (column) {
      const fieldname: boolean [] = [];
      self.editfields[column] = fieldname;
      self.data.forEach(function (info) {
        self.editfields[column][self.data.indexOf(info)] = false;
        self.edit[self.data.indexOf(info)] = false;
      });
    });
  }

}
