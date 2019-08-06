import { TestBed } from '@angular/core/testing';

import { CustomerHistoryDataService } from './customer-history-data.service';

describe('CustomerHistoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerHistoryDataService = TestBed.get(CustomerHistoryDataService);
    expect(service).toBeTruthy();
  });
});
