import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';


@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.css']
})
export class EventBoxComponent implements OnInit {
  @Input() event: Event;
  constructor() { }

  ngOnInit() {
  }

}