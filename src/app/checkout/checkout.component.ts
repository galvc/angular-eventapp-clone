import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customerInformation = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    address: new FormControl('')
  })

  paymentInformation = new FormGroup({
    creditCardInformation: new FormControl('', Validators.required),
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