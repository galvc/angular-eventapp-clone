import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';

/** config angular i18n **/
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EventsComponent } from "./events/events.component";
import { EventBoxComponent } from "./event-box/event-box.component";
import { EventsService } from "./events.service";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { EventSearchComponent } from './event-search/event-search.component';
import { AdminComponent } from './admin/admin.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminEventlistComponent } from './admin-eventlist/admin-eventlist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    /** import ng-zorro-antd root module，you should import NgZorroAntdModule and avoid importing sub modules directly **/
    NgZorroAntdModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EventsComponent,
    EventBoxComponent,
    EventDetailsComponent,
    CheckoutComponent,
    EventSearchComponent,
    AdminComponent,
    AddEventComponent,
    AdminEventlistComponent
  ],
  bootstrap: [AppComponent],
  providers: [EventsService, { provide: NZ_I18N, useValue: en_US, providers: [InMemoryDataService] }]
})
export class AppModule {}
