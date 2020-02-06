import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event';

@Component({
  selector: 'app-admin-eventlist',
  templateUrl: './admin-eventlist.component.html',
  styleUrls: ['./admin-eventlist.component.css']
})
export class AdminEventlistComponent implements OnInit {
  events: Event[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents()
    .subscribe( e => this.events = e);
  }

  deleteEvent(event) {

  }
}