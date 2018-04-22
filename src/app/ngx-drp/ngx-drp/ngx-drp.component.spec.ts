import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDrpComponent } from './ngx-drp.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CalendarOverlayService } from '../services/calendar-overlay.service';
import { RangeStoreService, DATE } from '../services/range-store.service';
import { ConfigStoreService } from '../services/config-store.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


class MockOverlayService {
  open(){  }
}

class MockDomSanitizer {
  bypassSecurityTrustResourceUrl() {}
}

describe('NgxDrpComponent', () => {
  let component: NgxDrpComponent;
  let fixture: ComponentFixture<NgxDrpComponent>;
  let sanitizerSpy: jasmine.Spy;
  let iconRegSpy: jasmine.Spy;

  let rangeStoreService : RangeStoreService;
  let configStoreService: ConfigStoreService;

  let today:Date = new Date();
  let fromDate:Date = new Date(today.setDate(today.getDate() - 7));
  let toDate:Date = new Date();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDrpComponent ],
      providers:[
        {provide: CalendarOverlayService, useClass: MockOverlayService},
        {provide: DomSanitizer, useClass: MockDomSanitizer},
        {provide: DATE, useValue: new Date()},
        RangeStoreService,
        ConfigStoreService,
        MatIconRegistry,
        DatePipe
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let sanitier = TestBed.get(DomSanitizer);
    let iconRegistry = TestBed.get(MatIconRegistry);
    rangeStoreService = TestBed.get(RangeStoreService);
    configStoreService = TestBed.get(ConfigStoreService);

    sanitizerSpy = spyOn(sanitier, "bypassSecurityTrustResourceUrl");
    iconRegSpy = spyOn(iconRegistry, "addSvgIcon");
    
    fixture = TestBed.createComponent(NgxDrpComponent);
    component = fixture.componentInstance;

    component.options = {
        presets:[],
        format: 'mediumDate',
        range: {fromDate:fromDate, toDate:toDate},
        applyLabel: "Submit"
      };
    
      fixture.detectChanges();
    });
    
    
  it('should register svg icon', () => {
    expect(sanitizerSpy).toHaveBeenCalled();
    expect(iconRegSpy).toHaveBeenCalled();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set options in config', () => {
    expect(configStoreService.ngxDrpOptions).toBeTruthy();
  })

  it('should set current date as per options', () => {
    let updateDateSpy = spyOn(rangeStoreService, "updateRange");
    component.ngOnInit();
    expect(updateDateSpy).toHaveBeenCalledWith(component.options.range.fromDate, component.options.range.toDate);
  })

});
