import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  fees: number = 0.10; //move this somewhere else later
  order;
  customerInformation = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    address: new FormControl(''),
    creditCardInformation: new FormControl('', Validators.required),
  })

  // paymentInformation = new FormGroup({
  //   creditCardInformation: new FormControl('', Validators.required),
  //   expirationDate: new FormControl(''),
  //   pinCode: new FormControl('')
  // })
  constructor(private location:Location, private eventsService: EventsService) { }

  ngOnInit() {
    this.order = this.eventsService.getOrder();
  }

  handleSubmit(data1) {
    console.warn(data1);
  }

  cancel(): void {
    this.location.back();
  }
}