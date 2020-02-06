import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private eventsService: EventsService) { }
  @Input() events;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getAllEvents()
    .subscribe( e => this.events = e);
  }

//i emitted an event
  deleteEvent(event) {
    console.log('trying to delete')
    console.log(event);
    this.eventsService.deleteEvent(event.id).subscribe(
      e => {alert(`${name} has been deleted`)
      this.getEvents();}
    )
  }

}