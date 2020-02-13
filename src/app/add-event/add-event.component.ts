import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @Output() newEvent = new EventEmitter<any>();

  form = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    organizers: new FormControl(''),
  });

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  handleSubmit() {
    console.log(this.form.get('time').value)
    this.newEvent.emit(this.form.value);
    this.form.reset();
  }

}