import { Component, OnInit } from "@angular/core";
import { EventsService } from "../events.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  fees: number = 0.1; //move this somewhere else later
  order;
  customerInformation = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl(""),
    address: new FormControl(""),
    creditCardInformation: new FormControl("", Validators.required)
  });

  constructor(
    private location: Location,
    private eventsService: EventsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.order = this.eventsService.getOrder();
  }

// param is value of form
  handleSubmit(data) {
    console.warn(data);
    alert('thanks for your purchase')
  }

  cancel(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(["/events"]);
    }
  }
}
