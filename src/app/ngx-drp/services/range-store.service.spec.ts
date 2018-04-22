import { TestBed, inject } from '@angular/core/testing';

import { RangeStoreService } from './range-store.service';

describe('RangeStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Date, useValue: new Date},
        RangeStoreService]
    });
  });

  it('should be created', inject([RangeStoreService], (service: RangeStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should update the store and emit range update', inject([RangeStoreService], (service:RangeStoreService) => {
    let rangeUpdateSub = service.rangeUpdate$.subscribe(
      val => {
        expect(val).toBeTruthy();
      }
    )
    service.updateRange();
    rangeUpdateSub.unsubscribe();
  }))

});
