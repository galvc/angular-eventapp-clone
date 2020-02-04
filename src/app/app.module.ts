import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module'
/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EventsComponent } from './events/events.component';
import { EventBoxComponent } from './event-box/event-box.component';
import { EventsService } from './events.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule,
    /** import ng-zorro-antd root module，you should import NgZorroAntdModule and avoid importing sub modules directly **/
    NgZorroAntdModule ],
  declarations: [ AppComponent, HelloComponent, EventsComponent, EventBoxComponent, EventDetailsComponent, CheckoutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EventsService, {provide: NZ_I18N, useValue: en_US}]
})
export class AppModule { }
