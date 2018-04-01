import { TestBed, inject } from '@angular/core/testing';

import { RangeStoreService } from './range-store.service';

describe('RangeStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RangeStoreService]
    });
  });

  it('should be created', inject([RangeStoreService], (service: RangeStoreService) => {
    expect(service).toBeTruthy();
  }));
});
