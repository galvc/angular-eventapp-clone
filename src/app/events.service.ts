import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from './event';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  order = {
    "event": null,
    "quantity": null,
    "total": null,
    "fees": null,
    "customer": null
  }

  fees: number = 0.10;

  constructor(private http: HttpClient) { }

  getAllEvents() {
    // return this.http.get('https://samplewebappi.azurewebsites.net/api/todoitems');
    return this.http.get('assets/mock-events.json');
  }

  addToOrder(event, quantity) {
    this.order.event = event;
    this.order.quantity = quantity;
    this.order.fees = event.price * quantity * this.fees;
    this.order.total = event.price * quantity + this.order.fees;
    console.log('thsi is the order frm services ' + this.order.quantity);
  }

  getOrder() {
    return this.order;
  }
}