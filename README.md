# angular-eventapp-clone

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-eventapp-clone)

#status
- use navigation parameter to get eventid info for event-details component
- i moved away from http get because i dont have the ability to get a single object from the json file
- using routerlink and click at the same time; use this in the click method this.router.navigate(['/page']);
- there are different ways to submit a form -> submitting two forms with one submit
https://stackoverflow.com/questions/54141975/submit-two-reactive-forms-with-one-button-angular-2/54142153
i still need to reread this to understand
but for now i used an onclick instead of an onsubmit since the button is outside of the form codes
- moving into observables now woohoooo
- hoping to implement a simple search bar so i know how to use filters

#notes
FormControl - access to listen update validate form inputs
- associate with a form item and bind it, ex. [formControl]="x"
- in a form group, it is not bound, ex. formControlName="x"

To display value - use AsyncPipe(?) or subscribe to it
valueChanges is an observable?

FormGroup - has form controls, tracks the form state
has value, untoucked(?), set value
- returns an object of all the form field values

import reactiveformmodule to app.module

-  //the collection name must be the same as the object i returned from the other service


#todos
[x] add price
[ ] add quantity
[x] checkout: form
[x] checkout: details
[x] add checkout page
[ ] create and host the web api 
[ ] bonus: add cart
[ ] bonus: add an admin page
[ ] move back to http api
[ ] check for ticket quantity & allowing for more than one tix purchase
[ ] purchase button disabled until dropdown has changed
[ ] form validation 
[ ] confirm email input addition, comparing two input field validation
[ ] responsive webpage