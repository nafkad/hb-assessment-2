///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays.
*/


//////////////////PROBLEM 1////////////////////
/*
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
// const pizza = {};
const pizza = {
    name: "pepperoni",
    price: 20,
    category: "entree",
    popularity: 9,
    rating: 7,
    tags: ["large", "thin", "meat"],
};


//////////////////PROBLEM 2////////////////////
/*
    Let's print a few values from our pizza object.

    First, log the popularity of pizza.
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza["popularity"]); // access value of a key/property with the bracket notation
// console.log(Object.values(pizza)); // Get the just values of an object with Object.values(Object)
console.log(pizza.popularity); // this works, too

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza["tags"][1]); 
// access element in bracket notation of in an array in bracket notation 
//nested in an object as the value of a key/property
console.log(pizza.tags[1]); // this works, too


/*
    Third, destructure the price off of the
    pizza object.

    Print the value of your new price variable.
*/

//CODE HERE ????
console.log(pizza["price"]); // access value of a key/property with the bracket notation
console.log(pizza.price); // this works, too

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable.
*/

//CODE HERE
console.log(pizza["category"]); // access value of a key/property with the bracket notation
console.log(pizza.category); // this works, too

//////////////////PROBLEM 3////////////////////
/*
    Create an array with 4 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [
    {
        number: "rice",
        price: 40,
        category: "tens",
        popularity: 1,
        rating: 100,
        tags: ["carb", "brown", "first", "uno"],
    },
    {
        number: "pasta",
        price: 30,
        category: "twenties",
        popularity: 2,
        rating: 200,
        tags: ["carb", "yellow", "second", "dos"],
    },
    {
        number: "beans",
        price: 20,
        category: "thirties",
        popularity: 3,
        rating: 300,
        tags: ["fiber", "red", "third", "tres"],
    },
    {
        number: "fish",
        price: 10,
        category: "forties",
        popularity: 4,
        rating: 400,
        tags: ["protiens", "white", "second", "dos"],
    },
];
// console.log(foodArr);


//////////////////PROBLEM 4////////////////////
/*
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag
    of your choice.

    For example, you could return only the food objects
    which have "vegetarian" inside of their tags arrays.

    You can choose any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)

// const filteredFood = foodArr.filter( => (foodArr["tags"][2]))
// console.log(foodArr["tags"][2]); // ???
// const filteredFood = foodArr.filter((foodArr.tags[i].includes[2])) => {
//     console.log(foodArr["tags"][2]); // ???
// }

const filterFood = foodArr.filter ( // variable = array.filter
    (foodArr2) => {return (foodArr2.tags.includes("carb"))} 
    // Used filter method to make a copy of the foodArr in foodArr2 and returned values that only included carbs
    // includes.() methods replaces the "For Loop" - it loops through for us
);
console.log(filterFood);

// Extra practice
const ages = [32, 33, 16, 40, 12];
const adultAges = ages.filter(checkAdult);
function checkAdult(age) {
    return age >= 18;
};
console.log(adultAges);
// My understanding is that the filter method filters through the original array and makes a copy of 
// whatever you're filtering for (i.e. parameter/element) into the new array,.
// It only returns what you're looking for like the yellow sweaters out of all the sweaters

//////////////////PROBLEM 5////////////////////
/*
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for
    food that has above a certain rating,
    or is above a certain price.

    Write a function called `filterByProperty`
    that takes in two arguments: `property` and
    `number`

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against

    For example, calling filterByProperty('rating', 5)
    would return all the menu items with a rating above 5.

    And calling filterByProperty('price', 12)
    would return all the menu items with a price above 12.

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr. Return objects
    whose value for the given property is greater than the
    `number` passed in.

    Return the filtered array from the entire function
*/

//CODE HERE
// const filterByProperty = (rating, price);
/* function filterByProperty(rating, price) { // ???
    // let i = 0;
    // for (let i = 0; i < tags.length; i = i + 1) {
    //     console.log(foodArr)
    // }
    return("rating", 25); // ???
    return ("price", 150); // ???
};
console.log(filterByProperty);
*/
/*const filterByRating = (check) => {
    return check.rating >= 150;
}
const filterByProperty = foodArr.filter(checkRating, checkPrice);
*/
const filterByProperty = (property, num) => {
    return foodArr.filter(item => {
        if (property === "rating") {
            // console.log(item.rating > num);
            return item.rating > num;
        } else if (property === "price") {
            // console.log(item.price > num);
            return item.price > num;
        } console.log("please select a rating rating or price, and a number")
    })
}

/*
    Invoke the `filterByProperty` function, passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty("rating", 300));
console.log(filterByProperty("price", 35));


/* function filterByProperty(rating, price) {
    return("rating", 35); // ???
    return ("price", 300); // ???
};
console.log(filterByProperty);
*/

/* Original Solution
function checkValue(item) { // item ~ index for foodArr b/c a parameter of the fn
    return item.rating >= 300 || item.price >= 35; // || = or // && = and
    // return item.rating >= 300 || item.tags.includes("carb"); // || = or // && = and
    // return item.rating >= 300 || item.price >= 35 || item.tags.includes("carb"); // || = or // && = and
    // return (item.rating >= 300 || item.price >= 35) && item.tags.includes("carb"); // || = or // && = and
    // prcludes the second parameter in the the code above - not sure why???
}
const filterByProperty2 = foodArr.filter(checkValue);
console.log(filterByProperty2);
*/