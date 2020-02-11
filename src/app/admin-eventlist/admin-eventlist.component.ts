import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { EventsService } from "../events.service";
import { Event } from "../event";

@Component({
  selector: "app-admin-eventlist",
  templateUrl: "./admin-eventlist.component.html",
  styleUrls: ["./admin-eventlist.component.css"]
})
export class AdminEventlistComponent implements OnInit {
  
  @Input() events;
  @Output() eventToDelete = new EventEmitter<Event>();
  constructor(private eventsService: EventsService) {}

  ngOnInit() {}


}
