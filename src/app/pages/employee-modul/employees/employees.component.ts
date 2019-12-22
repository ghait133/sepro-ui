import {Component, OnInit, resolveForwardRef} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

  constructor() {
    this.logMessageId();
  }

  hours: number [] = [
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19];
  mins: number [] = [0, 15, 30, 45];
  now: any = new Date();
  start: string = '14:00:00';
  end: string = '14:30:00';
  standardwidth: number;
  getstandardwidth() {
    this.standardwidth = document.getElementsByTagName('td')[25].offsetWidth;
  }
  onMouseOverTd(td: any, appointment: any) {
    const tds = document.getElementsByTagName('td')
    const previewbox = document.getElementsByClassName('previewbox')[0]
  }
  onMouseleaveTd(td) {
    const tds = document.getElementsByTagName('td')
      //console.log('is leaving' + td.getAttribute('data-date'))
      const previewbox = document.getElementsByClassName('previewbox')[0]
  }
  getdate(hour: number, min: number) {
    return new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), hour, min).getTime();
  }
  logMessageId() {
    const elements = document.getElementsByTagName('td');
    console.log(elements);
    for (const a of elements) {
      a.addEventListener('click', function () {
          console.log(a.getAttribute('data-date'))
      })
    }

  }
  doElsCollide(el1: any, el2: any) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

    return !((el1.offsetBottom < el2.offsetTop) ||
      (el1.offsetTop > el2.offsetBottom) ||
      (el1.offsetRight < el2.offsetLeft) ||
      (el1.offsetLeft > el2.offsetRight))
  }
  getAppointmentLenght(start: number, end: number) {
    return (end - start) / 900000
  }
  inresizing = false;
  onResizeEnd(event: ResizeEvent): void {
    this.inresizing = false;
    console.log('end', event);
  }
  onResizeStart(event: ResizeEvent): void {
    this.inresizing = true;
    console.log('start', event);
  }
  onResizing(event: ResizeEvent): void {
    this.inresizing = true;
    console.log('resizing', event.rectangle.width);
  }
  setAppointmentPosition(appointmentBox: any) {
    const start = appointmentBox.getAttribute('data-start');
    appointmentBox.style.left = document.getElementById(start).offsetLeft + 18 + 'px'
  }
  isMouseDown = true;
  mouseOffset: any;
  currentAppointment: any;
  onMouseDown(e: any, item: any) {
    this.currentAppointment = item;
    this.isMouseDown = true;
    this.mouseOffset = {x: item.offsetLeft - e.clientX, y: item.offsetTop - e.clientY};
    item.style.backgroundColor = '#E57373';
    document.body.addEventListener('mousemove', (e) => {
      this.onMouseMove(e, item);
    });
    console.log(this.currentAppointment)
  }
  onMouseUp(e, item) {
    this.isMouseDown = false;
    item.style.backgroundColor = '#F44336';
    const tds = document.getElementsByTagName('td')
    const previewbox = <HTMLElement> document.getElementsByClassName('previewbox')[0]
    previewbox.style.opacity = '0';
    item.style.left = previewbox.offsetLeft + 'px';
    item.style.top = previewbox.offsetTop + 'px';
  }
  onMouseMove(e, item) {
    e.preventDefault();
    if (this.isMouseDown && !this.inresizing) {
      item.style.left = e.clientX + this.mouseOffset.x + 'px';
      item.style.top = e.clientY + this.mouseOffset.y + 'px';
    }
  }
  ngOnInit() {
    this.logMessageId();
    //this.getstandardwidth();
    const self = this;
    async function gilad() {
      console.log('Dokument geladen');
      self.getstandardwidth()
      console.log('widht: ' + self.standardwidth);
      const appointmentBoxes = document.getElementsByClassName('appointment-min-box')
      for (const box of appointmentBoxes) {
        console.log( box.getAttribute('data-lenght'));
        self.setAppointmentPosition(box)
        box.style.width =  box.getAttribute('data-lenght') * self.standardwidth + 'px';
        let refreshIntervalId = null;
        box.addEventListener('mousedown', (e) => {
          refreshIntervalId = setInterval(() => {
            const tds = document.getElementsByTagName('td')
            for (const a of tds) {
              if (self.doElsCollide(self.currentAppointment, a)) {
                self.onMouseOverTd(a, box)
                console.log('isover' + a.getAttribute('data-date'))
                break;
              }else {
                self.onMouseleaveTd(a)
              }
            }
          }, 150)

          self.onMouseDown(e, box);
        });
        box.addEventListener('mouseup', (e) => {
          clearInterval(refreshIntervalId)
          console.log('nouseup')
          self.onMouseUp(e, box);
        });
      }
    }
    window.onload = function () {
      gilad();
    }
    window.onresize = function () {
      gilad();
    }
  }

}
