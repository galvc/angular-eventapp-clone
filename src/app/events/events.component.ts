import { Component, OnInit } from "@angular/core";

import { eventList } from '../mock-events';
import { Event } from '../event';
import { EventsService } from "../events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    // this.events = this.eventsService.getAllEvents();
    // console.log(this.events);
    // this.getFoods();
    this.getEvents();
    
  }

  getEvents() {
    this.eventsService.getAllEvents()
    .subscribe(e => {this.events = e
    console.log('this is the events comp '  + JSON.stringify(this.events));}
    );v
  }

}
