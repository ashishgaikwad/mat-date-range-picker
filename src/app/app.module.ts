import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDrpModule } from './ngx-drp/ngx-drp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDrpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
