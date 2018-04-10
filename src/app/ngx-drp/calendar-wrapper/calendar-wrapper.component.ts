import { Component, ViewChild, Output, Input, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { ConfigStoreService } from '../services/config-store.service';

@Component({
  selector: 'calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarWrapperComponent implements OnChanges {

  @ViewChild(MatCalendar) matCalendar: MatCalendar<Date>;

  @Output() readonly selectedDateChange:EventEmitter<Date> = new EventEmitter<Date>();

  @Input() selectedDate:Date;
  @Input() prefix:string;
  @Input() minDate:Date;
  @Input() maxDate:Date;
  weekendFilter = (d:Date) => true;
  dateFormat:string;

  constructor(private configStore:ConfigStoreService) { 
    this.dateFormat = configStore.ngxDropOptions.format;
    if(configStore.ngxDropOptions.excludeWeekends) {
      this.weekendFilter = (d: Date): boolean => {
          const day = d.getDay();
          return day !== 0 && day !== 6;
      }
    }
  }
  
  ngOnChanges(changes:SimpleChanges){
    // Necessary to force view refresh
    this.matCalendar._activeDate = changes.selectedDate.currentValue;
  }

  onSelectedChange(date){
    this.selectedDateChange.emit(date);
  }

  onYearSelected(e) { }

  onUserSelection(e) { }

}
