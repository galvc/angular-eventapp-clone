# angular-eventapp-clone

- [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-eventapp-clone)
- using ANT design for the UI 
https://ng.ant.design/

## status
- use navigation parameter to get eventid info for event-details component
- i moved away from http get because i dont have the ability to get a single object from the json file
- using routerlink and click at the same time; use this in the click method this.router.navigate(- ['/page']);
- there are different ways to submit a form -> submitting two forms with one submit
https://stackoverflow.com/questions/54141975/submit-two-reactive-forms-with-one-button-angular-2/54142153
i still need to reread this to understand
but for now i used an onclick instead of an onsubmit since the button is outside of the form codes
- moving into observables now woohoooo
- hoping to implement a simple search bar so i know how to use filters
- i wasnt able to get the online api out on time, so i will just simulate the server using inmemorydb
- when searching user has to click on text itself
- cannot search by title, input is useless unless you click on the actual text result 
- i need admin table to refresh after deleting an event
ive  moved the delete methods away ffrom the table and into the admin page, the delete button just emits an event when clicked
now im thinking maybe i should just input the event array into the table so that the parent can refresh the table?????

## notes
FormControl - access to listen update validate form inputs
- associate with a form item and bind it, ex. - [formControl]="x"
- in a form group, it is not bound, ex. formControlName="x"

To display value - use AsyncPipe(?) or subscribe to it
valueChanges is an observable?

FormGroup - has form controls, tracks the form state
has value, untoucked(?), set value
- returns an object of all the form field values

import reactiveformmodule to app.module

-  //the collection name must be the same as the object i returned from the other service
- $ at the end of a variable means it is an observable and not an array 
- A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.
Every Subject is an Observable and an Observer. You can subscribe to a Subject, and you can call next to feed values as well as error and complete.
https://rxjs-dev.firebaseapp.com/api/index/class/Subjects
- the id of each evenr wil not match up to the array id, keep in mind esp for routerlinks
- so add event wouldnt work because of this in the add event component
this.eventsservice.addevent({value} as Event)
I copied this code from the angular tutorials but what happens is that value from the form is turned into an object before getting passed into service
in the original tutorial, the value was a string. since the form is already formatted, when it gets added to the api, it is wrapped again as an object with the id outside of the value ex: {{title, date, etc} id}
the fix is just to remove the brackets and also removing the id form input

- took me so. damn. long. to figure out
when passing a value through eventemitter
in the parenthtml, parentmethod must ALWAYS be ($event) otherwise it wont damn work
#todos
- [x] add price
- [x] add quantity
- [x] checkout: form
- [x] checkout: details
- [x] add checkout page
- [ ] create and host the web api 
- [ ] bonus: add cart
- [x] bonus: add an admin page
- [x] move back to http api
- [ ] check for ticket quantity & allowing for more than one tix purchase
- [x] purchase button disabled until dropdown has changed
- [ ] form validation 
- [ ] confirm email input, validating both inputs
- [ ] organizers input is taken as one string -> turn into an array of strings
- [ ] responsive webpage
- [ ] update quantity when it is 'bought'
- [x] search component
- [x] add http methods
- [ ] fix search: entire row result should be clickable
- [ ] fix search: search even without clicking the result
- [ ] add sample event button for demo convenience
- [ ] delete event
- [ ] format the time when event is added
- [ ] close the add event form when done
- [ ] move the addevent method to the admin parent component
