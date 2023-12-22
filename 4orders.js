/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////
/*
    In this file, you'll be writing a class
    to make tickets from order information.
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Ticket`.
    Make sure to call your constructor, and 
    require these 3 parameters: items, orderTime, 
    customerId. Additionally, set up a property
    called `status` that always has an initial
    value of 'queued'.

    Create a method on the class called `updateStatus`.
    The method should have one parameter, `newStatus`,
    which will be a string.

    Inside the method, set the value of `this.status`
    to be the new status that was sent in. Then
    console.log something like: 
    'The order for customer [CUSTOMERID] is
    now [STATUS].'
    Where CUSTOMERID and STATUS reference the values
    stored on the object.
*/

//CODE HERE
class Ticket {
    constructor(item, orderTime, customerId) {
        this.item = item;
        this.orderTime = orderTime;
        this.customerId = customerId;
        this.status = "queued";
    }
    updateStatus(newStatus) { // ???
        this.status = newStatus; // template string
        console.log(`The order for the customer ${this.customerId} is now ${this.status}`);
        // this.status = `The order for the customer ${customerId} is now ${this.status}`; // template string
        // console.log(`The order for the customer ${customerId} is now ${this.status}`)
    }
}
// Ticket.status();
// console.log(Ticket);

/*
    Create a new instance of your class.
    Save it to a variable called `firstTicket`.

    You can use this sample data or make
    up your own:
    food ordered: pizza, bread, and soda
    ordered at: 7:03 PM
    customer: 575
*/

//CODE HERE
// constructor(item, orderTime, customrerId) {
const firstTicket = new Ticket ("pizza", "7:03 PM", 575);
// firstTicket.item; // "pizza"
// firstTicket.orderTime; // "7:03 PM"
// firstTicket.customrerId; // 575
console.log(firstTicket);

/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

//CODE HERE
firstTicket.updateStatus("happy");
console.log(firstTicket);

/*
// Practice
class Ticket1 {}
const bulls = new Ticket1 ();
console.log(bulls);
bulls.city = "Chicago";
console.log(bulls);

const heat = new Ticket1 ();
console.log(heat);
heat.city = "Miami";
console.log(heat);

*/

class Ticket2 {
    cheer() {
        this.cheer = `Let's go ${this.team}`;
    }
    constructor(team, city) {
        this.team = team;
        this.city = city;
        this.sport = "basketball";
    }
};
console.log(Ticket2);
const rockets = new Ticket2("Rockets", "Houston");
// rockets.team; // "Rockets"
// rockets.city; // "Houston"
rockets.cheer();
console.log(rockets);

const yankees = new Ticket2("Yankees", "NewYork");
// yankees.team; // "Yankees"
// yankees.city; // "NewYork"
yankees.cheer();
console.log(yankees);

