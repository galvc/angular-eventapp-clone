import { Component, OnInit, Input } from "@angular/core";
import { EventsService } from "../events.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor(private eventsService: EventsService) {}
  @Input() events;
  addFormShow: boolean = false;
  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getAllEvents().subscribe(e => {
      this.events = e;
      this.getEvents();
    });
  }

  //i emitted an event
  deleteEvent(event) {
    this.eventsService.deleteEvent(event.id).subscribe(e => {
      alert(`${name} has been deleted`);
      this.getEvents();
    });
  }

  displayAddForm() {
    this.addFormShow = !this.addFormShow;
  }
}
