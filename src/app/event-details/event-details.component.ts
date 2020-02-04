import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventsService } from "../events.service";
import { eventList } from "../mock-events";
import { Event } from "../event";
@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"]
})
export class EventDetailsComponent implements OnInit {
  event;
  quantity: number;
  dropdownText: string = "Choose # of Tickets";
  purchaseBtnDisplay: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.event = eventList[+params.get("eventId")];
    });
    console.log(this.event);
  }

  // reflects the chosen quantity on the dropdown value
  // allows for the purchase button to be selected
  handleDropdown(quantity) {
    this.dropdownText = `${quantity} ticket(s): \$${this.event.price *
      quantity}`;
    this.quantity = quantity;
    this.purchaseBtnDisplay = !this.purchaseBtnDisplay; //gets disabled when changed again..
  }

  handlePurchase() {
    this.eventsService.addToOrder(this.event, this.quantity);
    this.router.navigate(['/checkout']);
    console.log("purchase triggered");
  }
}
