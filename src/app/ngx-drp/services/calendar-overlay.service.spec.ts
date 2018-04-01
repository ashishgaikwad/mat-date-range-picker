import { TestBed, inject } from '@angular/core/testing';

import { CalendarOverlayService } from './calendar-overlay.service';

describe('CalendarOverlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarOverlayService]
    });
  });

  it('should be created', inject([CalendarOverlayService], (service: CalendarOverlayService) => {
    expect(service).toBeTruthy();
  }));
});
