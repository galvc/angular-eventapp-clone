import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customerInformation = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  paymentInformation = new FormGroup({
    creditCardInformation: new FormControl(''),
    expirationDate: new FormControl(''),
    pinCode: new FormControl('')
  })
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  handleSubmit(data1) {
    console.warn(data1);
  }

}