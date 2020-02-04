import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventsService } from '../events.service';
import { eventList } from '../mock-events';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event;
  dropdownText: string = "Choose # of Tickets";
  purchaseBtnDisplay: boolean = false;
  

  constructor(private route:ActivatedRoute, private eventsService:EventsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.event = eventList[+params.get("eventId")];
    })
    console.log(this.event)
  }

  // reflects the chosen quantity on the dropdown value
  // allows for the purchase button to be selected
  handleDropdown(quantity){
    this.dropdownText = `${quantity} ticket(s): \$${this.event.price * quantity}`;
    this.purchaseBtnDisplay = !this.purchaseBtnDisplay;
  }

  handlePurchase(id: number, price: number, quantity: number) {

  }
}