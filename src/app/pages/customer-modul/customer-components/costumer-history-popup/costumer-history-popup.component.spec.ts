import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerHistoryPopupComponent } from './costumer-history-popup.component';

describe('CostumerHistoryPopupComponent', () => {
  let component: CostumerHistoryPopupComponent;
  let fixture: ComponentFixture<CostumerHistoryPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumerHistoryPopupComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerHistoryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
