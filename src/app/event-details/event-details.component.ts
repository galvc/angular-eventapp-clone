import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { eventList } from '../mock-events';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.event = eventList[+params.get("eventId")];
    })
    console.log(this.event)
  }

}