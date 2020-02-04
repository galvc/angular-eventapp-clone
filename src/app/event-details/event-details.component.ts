import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { e}
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  id: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("eventId");
    })
    console.log(this.id)
  }

}