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
    constructor(items, orderTime, customerId) {
    this.items = items
    this.orderTime = orderTime
    this.customerId = customerId
    this.status = 'queued'
    }
    statusUpdate(newStat) {
        this.status = newStat
        console.log(`The order for customer ${this.customerId} is now ${this.status}`);
    }
}
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

let items = ['pizza', 'bread', 'soda']
let orderTime = '7:03 PM'
let customerId = 575

let firstTicket = new Ticket(items, orderTime, customerId)
console.log(firstTicket);

/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

//CODE HERE
firstTicket.statusUpdate('cooking')
console.log(firstTicket);