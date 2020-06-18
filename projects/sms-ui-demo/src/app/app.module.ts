import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SMSUiModule } from "@sms/ui"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SMSUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
