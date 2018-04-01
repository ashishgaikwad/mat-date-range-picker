import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Range } from '../model/model';

@Injectable()
export class RangeStoreService {

  $rangeUpdate:Subject<Range> = new Subject<Range> ();

  constructor(
    private _fromDate: Date,
    private _toDate: Date
  ) { }

  /* set fromDate(fromDate:Date) {
    this._fromDate = fromDate;
  } */

  get fromDate():Date {
    return this._fromDate;
  }

  /* set toDate(toDate:Date) {
    this._toDate = toDate;
  } */

  get toDate():Date {
    return this._toDate;
  }

  updateRange(fromDate:Date = this._fromDate, toDate:Date = this._toDate) {
    this._fromDate = fromDate;
    this._toDate = toDate;
    this.$rangeUpdate.next({fromDate:this._fromDate, toDate:this._toDate});
  }


}