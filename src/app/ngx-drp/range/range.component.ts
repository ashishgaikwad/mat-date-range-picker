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
  applyLabel:string;
  cancelLabel:string;

  constructor(
    private rangeStoreService:RangeStoreService,
    private configStoreService:ConfigStoreService,
    private overlayRef:OverlayRef
    ) { }

  ngOnInit() {
    this.fromDate = this.rangeStoreService.fromDate;
    this.toDate = this.rangeStoreService.toDate;
    this.applyLabel = this.configStoreService.ngxDrpOptions.applyLabel || "Apply";
    this.cancelLabel = this.configStoreService.ngxDrpOptions.cancelLabel || "Cancel";
    this.presets = this.configStoreService.ngxDrpOptions.presets;
    ({fromDate:this.fromMinDate, toDate:this.fromMaxDate} = this.configStoreService.ngxDrpOptions.fromMinMax);
    ({fromDate:this.toMinDate, toDate:this.toMaxDate} = this.configStoreService.ngxDrpOptions.toMinMax);
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
