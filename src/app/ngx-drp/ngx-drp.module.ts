import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDrpComponent } from './ngx-drp/ngx-drp.component';
import { RangeComponent } from './range/range.component';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { PresetsComponent } from './presets/presets.component';
import { CalendarOverlayService } from './services/calendar-overlay.service';
import { RangeStoreService, DATE } from './services/range-store.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { ConfigStoreService } from './services/config-store.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    OverlayModule,
  ],
  declarations: [
    NgxDrpComponent,
    CalendarWrapperComponent,
    RangeComponent,
    PresetsComponent
  ],
  providers: [
      CalendarOverlayService,
      RangeStoreService,
      ConfigStoreService,
      {provide:DATE, useValue: new Date()}
  ],
  //bootstrap: [NgxDrpComponent],
  entryComponents:[RangeComponent],
  exports: [NgxDrpComponent]
})
export class NgxDrpModule { }
