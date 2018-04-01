import { Component, OnInit } from '@angular/core';
import { PresetItem, NgxDrpOptions } from '../model/model';
import { RangeStoreService } from '../services/range-store.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { ConfigStoreService } from '../services/config-store.service';

@Component({
  selector: 'mat-drp-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {

  fromDate:Date;
  toDate:Date;
  fromMinDate:Date;
  fromMaxDate:Date;
  toMinDate:Date;
  toMaxDate:Date;
  presets:Array<PresetItem> = [];
  
  constructor(
    private rangeStoreService:RangeStoreService,
    private configStoreService:ConfigStoreService,
    private overlayRef:OverlayRef
    ) { }

  ngOnInit() {
    this.fromDate = this.rangeStoreService.fromDate;
    this.toDate = this.rangeStoreService.toDate;
    this.presets = this.configStoreService.ngxDropOptions.presets;
    ({fromDate:this.fromMinDate, toDate:this.fromMaxDate} = this.configStoreService.ngxDropOptions.fromMinMax);
    ({fromDate:this.toMinDate, toDate:this.toMaxDate} = this.configStoreService.ngxDropOptions.toMinMax);
  }

  updateFromDate(date) {
    this.fromDate = date;
  }

  updateToDate(date) {
    this.toDate = date;
  }

  updateRangeByPreset(presetItem:PresetItem){ // Need a better way to expose API for setting presets externally
    //this.rangeStoreService.updateRange(presetItem.range.fromDate, presetItem.range.toDate);
    this.updateFromDate(presetItem.range.fromDate);
    this.updateToDate(presetItem.range.toDate);
  }

  applyNewDates(e) {
    this.rangeStoreService.updateRange(this.fromDate, this.toDate);
    this.disposeOverLay();
  }
  
  discardNewDates(e) {
    this.rangeStoreService.updateRange();
    this.disposeOverLay();
  }
  
  private disposeOverLay(){
    this.overlayRef.dispose();
  }

}
