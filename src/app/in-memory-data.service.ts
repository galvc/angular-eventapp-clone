import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

import { Event } from "./event";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
     const events = [
      {
        id: 1,
        title: "Seattle Bacon and Beer",
        date: "04-25-2020",
        time: "8:00am",
        price: 65.0,
        quantity: 100,
        description:
          "EARLY BIRD TICKETS ON SALE NOW! For the 7th year, the Bacon & Beer Classic is BACK at T-Mobile Park. Explore the field and concourse and choose from 100+ craft beer samples from regional breweries. Plus, enjoy 35+ creative bacon dishes from local Seattle chefs and restaurants. Cheer on Seattle's fiercest foodies as they go head to head in the Hormel® Black Label Bacon® Eating Contest, challenge your friends in lawn games, ride a bacon seesaw, and snap a group shot in the photo booth. Rally your foodie friends and get ready to experience bacon and beer like never before.",
        location: "Space Needle",
        organizers: ["John Doe", "Jane Doe"]
      },
      {
        id: 2,
        title: "ConveyUX 2020 - Seattle's User Experience Conference",
        date: "03-09-2020",
        time: "9:00am",
        price: 1495.0,
        quantity: 50,
        description:
          "ConveyUX is the premier user experience conference on the West Coast. The 2020 conference in Seattle features 65 sessions from 50 UX leaders across three full days. Join us March 3–5, 2020 to explore how UX really gets done.",
        location: "The Westin",
        organizers: ["Blink"]
      },
      {
        id: 3,
        title: "Capitol Hill Block Party",
        date: "07-17-2020",
        time: "1:00pm",
        price: 175.0,
        quantity: 40,
        description:
          "These tickets are for Capitol Hill Block Party 2020, not for a specific artist. Artist, venue, and schedule are subject to change without notice. Tickets are non-refundable for any reason including artist cancellation. This festival takes place rain or shine. In the event of festival cancellation, all tickets will be automatically refunded.",
        location: "Capitol Hill Block Party, 925 East Pike Street",
        organizers: ["Seattle"]
      },
      {
        id: 4,
        title: "Northwest Terror Fest",
        date: "05-28-2020",
        time: "4:30pm",
        price: 20.0,
        quantity: 200,
        description:
          "Three-day All Access Passes will go on sale January 3rd. Those passes will be good for all shows, all venues (including Highline). Prices for those passes will increase on March 20 if they have not sold out before then. There is also an option to buy 3-Day Neumos passes, which will be good for all shows at the Neumos venue for all 3 days. The price of those passes will also increase on March 20 if they have not sold out. No 3-day passes for Barboza-only shows will be offered. Single-day tickets for each venue are also available.",
        location: "Neumos, Seattle, WA",
        organizers: ["No Clean Singing"]
      },
      {
        id: 5,
        title: "Mudhoney",
        date: "05-16-2020",
        time: "8:00pm",
        quantity: 20,
        price: 25.0,
        description:
          "Since the late '80s, Mudhoney – the Seattle-based foursome whose muck-crusted version of rock, shot through with caustic wit and battened down by a ferocious low end – has been a high-pH tonic against the ludicrous and the insipid.",
        location: "The Crocodile, Seattle",
        organizers: ["The Crocodile"]
      },
      {
        id: 6,
        title: "Walla Walla Wine in Seattle - Wine Tasting",
        date: "02-10-2020",
        time: "5:30pm",
        price: 50.0,
        quantity: 150,
        description:
          "Connect with 50 Walla Walla Valley wineries and winemakers and sample, side-by-side, the wine crafted from the unique growing sites of the Walla Walla Valley AVA and surrounding areas.",
        location: "McCaw Hall",
        organizers: ["Walla Walla Wine Valley Association"]
      },
      {
        id: 7,
        title: "Sample event you can delete",
        date: "02-10-2020",
        time: "5:30pm",
        price: 50.0,
        quantity: 150,
        description:
          "You can delete me so yu know the api works.",
        location: "McCaw Hall",
        organizers: ["Me"]
      }
    ];
    return { events };
  }
}
