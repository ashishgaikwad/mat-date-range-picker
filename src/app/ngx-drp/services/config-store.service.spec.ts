import { TestBed, inject } from '@angular/core/testing';

import { ConfigStoreService } from './config-store.service';

describe('ConfigStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigStoreService]
    });
  });

  it('should be created', inject([ConfigStoreService], (service: ConfigStoreService) => {
    expect(service).toBeTruthy();
  }));
});
