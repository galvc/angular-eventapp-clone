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
  order;

  constructor(private http: HttpClient) { }

  getAllEvents() {
    // return this.http.get('https://samplewebappi.azurewebsites.net/api/todoitems');
    return this.http.get('assets/mock-events.json');
  }

  addToOrder(id, price, quantity) {

  }
}