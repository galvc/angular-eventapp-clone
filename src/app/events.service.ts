import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { Event } from "./event";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  order = {
    event: null,
    quantity: null,
    total: null,
    fees: null,
    customer: null
  };
  fees: number = 0.1;
  private eventsUrl = "api/events";
  //the collection name must be the same as the object i returned from the other service

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    // return this.http.get('https://samplewebappi.azurewebsites.net/api/todoitems');
    // return this.http.get('assets/mock-events.json');
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getEvent(id: number): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url);
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.eventsUrl, event, this.httpOptions);
  }

  searchEvent(term: string): Observable<Event[]> {
    if (!term.trim()) {
      return of([]);
    }
    console.log("service searching");
    return this.http.get<Event[]>(`${this.eventsUrl}/?title=${term}`)
    // .pipe(
    //   tap(_ => console.log("searching")),
    //   catchError(this.handleError<Event[]>("searchEvent", []))
    // );
  }

  addEvent (event: Event): Observable<Event> {
  return this.http.post<Event>(this.eventsUrl, event, this.httpOptions)
  }

  addToOrder(event, quantity) {
    this.order.event = event;
    this.order.quantity = quantity;
    this.order.fees = event.price * quantity * this.fees;
    this.order.total = event.price * quantity + this.order.fees;
    console.log("thsi is the order frm services " + this.order.quantity);
  }

  getOrder() {
    return this.order;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
