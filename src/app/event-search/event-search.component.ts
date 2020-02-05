import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Event } from "../event";
import { EventsService } from "../events.service";

@Component({
  selector: "app-event-search",
  templateUrl: "./event-search.component.html",
  styleUrls: ["./event-search.component.css"]
})
export class EventSearchComponent implements OnInit {
  events$: Observable<Event[]>;
  private searchTerms = new Subject<string>(); //ohmygooooodd this took forever

  constructor(private eventsService: EventsService) {}

  //words that will be pushed into the stream
  search(term: string): void {
    this.searchTerms.next(term);
    console.log('i a msearching');
  }

  ngOnInit(): void {
    this.events$ = this.searchTerms.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => this.eventsService.searchEvent(term))
    );
    console.log('event search has started')
  }

}
