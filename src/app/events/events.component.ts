import { Component, OnInit } from "@angular/core";

import { eventList } from '../mock-events';
import { EventsService } from "../events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  events = eventList;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    // this.events = this.eventsService.getAllEvents();
    // console.log(this.events);
    // this.getFoods();
  }

  // getFoods() {
  //  this.eventsService.getAllEvents().subscribe(
  //     data => { this.events = data},
  //     err => console.error(err),
  //     () => console.log('done loading foods')
  //   );
  // }
}
