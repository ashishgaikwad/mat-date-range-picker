import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnDestroy, AfterViewInit } from '@angular/core';
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
  providers:[DatePipe]
})
export class NgxDrpComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('calendarInput') calendarInput;
  @Output() readonly selectedDateRangeChanged: EventEmitter<Range> = new EventEmitter<Range>();
  @Input() private options:NgxDrpOptions;
  private $rangeUpdateSub:Subscription;
  private selectedDateRange:string = "";


  constructor(
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
    this.configStoreService.ngxDropOptions = this.options; 
    this.$rangeUpdateSub = this.rangeStoreService.$rangeUpdate.subscribe(
      (range) => {
        const from:string = this.formatToDateString(range.fromDate, this.options.format);
        const to:string = this.formatToDateString(range.toDate, this.options.format);
        this.selectedDateRange = `${from} - ${to}`;
        this.selectedDateRangeChanged.emit(range);
      }
    );
  }
  
  ngOnDestroy() {
    this.$rangeUpdateSub.unsubscribe();
  }
  
  private formatToDateString(date:Date, format:string):string {
    return this.datePipe.transform(date, format);
  }  

  ngAfterViewInit(){
    let x = () => this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
  }

  openCalendar(event){
    const overlayRef:OverlayRef =  this.calendarOverlayService.open({}, this.calendarInput);
  }

}
