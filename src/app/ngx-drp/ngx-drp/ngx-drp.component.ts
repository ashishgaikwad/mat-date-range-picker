import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnDestroy, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OverlayRef } from '@angular/cdk/overlay';
import { CalendarOverlayService } from '../services/calendar-overlay.service';
import { RangeStoreService } from '../services/range-store.service';
import { Range, NgxDrpOptions } from '../model/model';
import { timeout } from 'q';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ConfigStoreService } from '../services/config-store.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-drp',
  templateUrl: './ngx-drp.component.html',
  styleUrls: ['./ngx-drp.component.css'],
  providers:[DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDrpComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('calendarInput') calendarInput;
  @Output() readonly selectedDateRangeChanged: EventEmitter<Range> = new EventEmitter<Range>();
  @Input() options:NgxDrpOptions;
  private $rangeUpdateSub:Subscription;
  private selectedDateRange:string = "";


  constructor(
    private changeDetectionRef:ChangeDetectorRef,
    private calendarOverlayService: CalendarOverlayService,
    private rangeStoreService:RangeStoreService,
    private configStoreService:ConfigStoreService,
    private iconRegistry:MatIconRegistry,
    private sanitizer:DomSanitizer,
    private datePipe:DatePipe
  ) { 
    iconRegistry.addSvgIcon(
      'ngx-calendar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ngx-calendar.svg'));
  }

  ngOnInit() {
    this.configStoreService.ngxDrpOptions = this.options; 
    this.$rangeUpdateSub = this.rangeStoreService.$rangeUpdate.subscribe(
      (range) => {
        const from:string = this.formatToDateString(range.fromDate, this.options.format);
        const to:string = this.formatToDateString(range.toDate, this.options.format);
        this.selectedDateRange = `${from} - ${to}`;
        this.selectedDateRangeChanged.emit(range);
      }
    );

    this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
    this.changeDetectionRef.detectChanges();
  }
  
  ngOnDestroy() {
    this.$rangeUpdateSub.unsubscribe();
  }
  
  private formatToDateString(date:Date, format:string):string {
    return this.datePipe.transform(date, format);
  }  

  ngAfterViewChecked(){
    
  }

  openCalendar(event){
    const overlayRef:OverlayRef =  this.calendarOverlayService.open({}, this.calendarInput);
  }

  valueChanged(event) {
    let [fromDateStr, toDateStr] = event.target.value.split("-");
    if(fromDateStr && toDateStr) {
      let fromDate = new Date(fromDateStr);
      let toDate = new Date(toDateStr);
      this.rangeStoreService.updateRange(fromDate, toDate);
    }
    else {
      this.rangeStoreService.updateRange();
      throw new Error("From and To date string shold be")
    }
  }

}
