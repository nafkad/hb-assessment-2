///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
 const greetUser = (username) => { // Variable is equal to a fn from const to {}
    // return `Welcome back, ${username}`; // Template literal
    return "Welcome back, " + username; // Concatenation = string + variable
    // return "Welcome back," + username + "!"; // Concatenation = string + variable + !
    // What we want to see in the output
 }
 console.log(greetUser("Andrew"));
 // console.log the variable and the paramenter



//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

//CODE HERE

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

function canWeDeliver(zipCode) { // Zipcode = parameter // argument would be the actual zipcode
    for (let i = 0; i < deliveryAreaZipCodes.length; i += 1) {
        if (deliveryAreaZipCodes[i] === zipCode) { // Is the current element is equal === to the specific zipcode, 
            // then retrun the statement below, else return the other statement below that.
            // console.log("You're in our delivery zone!"); // Not needed
            return "You're in our delivery zone!"; // Return this message
            // Give the fn all the opprotunies to loop through the array and search for the zipcode.
            // Then, and only then, if it's not there, then return the statement below
        }
    }
    // console.log("Sorry, we can't deliver to that address"); // Not needed
    return "Sorry, we can't deliver to that address"; // Or return this message
}
console.log(canWeDeliver(84606)); // Sorry, we can't deliver to that address
console.log(canWeDeliver(85205)); // You're in our delivery zone
// Extra practice
console.log(canWeDeliver(85204)); // You're in our delivery zone
console.log(canWeDeliver(85203)); // You're in our delivery zone
console.log(canWeDeliver(85213)); // You're in our delivery zone
console.log(canWeDeliver(85206)); // You're in our delivery zone

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE
// const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]
function canWeDeliver2(zipCode) {
    // for (let i = 0; i < deliveryAreaZipCodes.length; i = i + 1) {
        // deliveryAreaZipCodes.includes(zipCode) // array.includes(element)
        // Element - The value to search for
        if (deliveryAreaZipCodes.includes(zipCode)) {
            // includes.() methods replaces the "For Loop" - it loops through for us
            // array.includes(element)
            // Element - The value to search for
            console.log("You're in our delivery zone!")
        }
        else {
            console.log("Sorry, we can't deliver to that address");
        }
    }
canWeDeliver2(84606); // "Sorry, we can't deliver to that address"
// Was getting the message "undefined" but removed the console.log ???
canWeDeliver2(85205); // "You're in our delivery zone!"
// Was getting the message "undefined" but removed the console.log ???

// Extra practice
canWeDeliver2(85204); // "You're in our delivery zone!"
canWeDeliver2(85203); // "You're in our delivery zone!"
canWeDeliver2(85213); // "You're in our delivery zone!"
canWeDeliver2(85206); // "You're in our delivery zone!"
// Was getting the message "undefined" for these as well but removed the console.log ???

//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: 'This deal lasts until the end of March!'
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.

    (Hint: If you don't remember the `replace` method, there is an example
    in the handout for the "Intro to JS" lecture)
*/

//CODE HERE
// const deals = [ ]
console.log(deals);

// Step 1: Deconstruct the Object in the Array
// Destructing Arrays - “unpack” an array into different values using destructuring syntax:
for (const [title, desc] of Object.entries(deals)) {
    console.log(title, desc);
}

// Step 2: Then use the "replace" method
// To replace properties in an Object
// console.log(array.replace("value", "replacement value")); // Forumla/syntax
// Object.replace("15% off!", "10% off!");
// console.log(deals.Object.replace("15% off!", "10% off!")); // Use this replace method
console.log(deals[0].title.replace("15", "10")); // Use this replace method
// console.log(deals.replace("15% off!", "10% off!"));  // Or use this replace method
// console.log(deals);  // Not sure how to print the replacement

// Example: To replace characters in a string
// const word = "coffee";
// console.log(word.replace('o', '0')); // 'c0ffee'

// console.log(Object.values(deals)); // Get the just values of an object with Object.values(array)
// console.log(Object.keys(deals)); // Get the just indeces of an object with Object.keys(array) ???


/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.
*/

//CODE HERE
// const deals = [ ]
// console.log(deals);
// console.log(deals.Object.replace("March", "April")); // Use this replace method
console.log(deals[1].desc.replace("March", "April")); // Use this replace method
