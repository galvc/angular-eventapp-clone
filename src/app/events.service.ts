import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getAllEvents() {
    // return this.http.get('https://samplewebappi.azurewebsites.net/api/todoitems');
    return this.http.get('assets/mock-events.json')
  }

  constructor(private http: HttpClient) { }



}