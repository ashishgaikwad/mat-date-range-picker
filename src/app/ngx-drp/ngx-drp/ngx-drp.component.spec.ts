import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDrpComponent } from './ngx-drp.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CalendarOverlayService } from '../services/calendar-overlay.service';
import { Overlay } from '@angular/cdk/overlay';
import { RangeStoreService } from '../services/range-store.service';
import { ConfigStoreService } from '../services/config-store.service';

fdescribe('NgxDrpComponent', () => {
  let component: NgxDrpComponent;
  let fixture: ComponentFixture<NgxDrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDrpComponent ],
      providers:[CalendarOverlayService, RangeStoreService, ConfigStoreService],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
