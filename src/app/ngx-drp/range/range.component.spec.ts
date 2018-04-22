import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeComponent } from './range.component';
import { RangeStoreService, DATE } from '../services/range-store.service';
import { ConfigStoreService } from '../services/config-store.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

class MockOverlayRef {
  dispose() {}
}

describe('RangeComponent', () => {
  let component: RangeComponent;
  let fixture: ComponentFixture<RangeComponent>;
  let configStoreService:ConfigStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeComponent ],
      providers: [
        {provide: DATE, useValue: new Date},
        {provide: OverlayRef, useClass: MockOverlayRef},
        RangeStoreService,
        ConfigStoreService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    configStoreService = TestBed.get(ConfigStoreService);
    configStoreService.ngxDrpOptions = {
      presets:[],
      format: 'mediumDate',
      range: {fromDate:new Date(), toDate: new Date()},
      applyLabel: "Submit"
    };
    fixture = TestBed.createComponent(RangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
