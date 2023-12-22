///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

// const initialValue = 0;
// const summerPrice = cart.reduce((price[i]) => price[0] + price[1] + price[2], in console.log(summerPrice)); // ???
// const total = 0; // already int he reduce method param
const summedPrice = cart.reduce((total, currentObject) => total + currentObject.price, 0) // acc, curr, respectively
// the 0 is the $0 starting point of the "total"
// reduce - total, index, starting point
console.log(summedPrice);
// Reduce is like a "For Loop" - run through an array and return the total


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// Total, Tax (0.06), Coupon
// const calcFinalPrice 

/* const cartTotal = 100; // for example
const tax = 0.06
const couponValue = 20;
function calcFinalPrice(cartTotal) {
    return cartTotal * tax - couponValue; // ???
    // return calcFinalPrice;
}
console.log(calcFinalPrice);
*/

const calcFinalPrice = (summedPrice, couponValue, tax) => {
    return (summedPrice = summedPrice + tax * summedPrice) - couponValue
}
console.log(calcFinalPrice(summedPrice, 10, 0.06)); // 18.58

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties. 
    // Note: Properties are the things inside the object.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    time: "string" // To know the usual timeframe the customers visit the restaurant
    zipCode: number // To know the geographic locations of their customers
    age: number // To know the age demographics of their customers
    gender: "string" // To know the demographics of their customers and which gender visits/pays more
    popular: [array] // To know the customers' most ordered menu items
    cost: number // To know the price customers spend on meals

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    time: "afternoon",
    zipCode: 90210,
    age: 35,
    gender: "female",
    popular: ["tacos", "burritos", "guac"],
    cost: 60,
};
console.log(customer);
// Practice
// console.log(customer["zipCode"]); 
// console.log(customer["popular"]); 
