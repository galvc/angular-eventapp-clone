import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from '../event';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

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

  handleSubmit(value) {
    // console.log(this.form.value)
    // let value = this.form.value;
    this.eventsService.addEvent(value as Event).subscribe(
      data => { alert(`Event ${data.title} has been added`)
      this.form.reset()
      }
    )
  }

}