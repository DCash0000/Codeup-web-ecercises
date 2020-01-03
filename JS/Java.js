"use strict";

// console.log("Hello World");
//
// let name = "Cash";
// console.log(name);
//
// //variable names should be meaningful and descriptive
// //variable names cannot start with a number
// //variable names cannot contain spaces or hyphens (-)
// //variable names are case sensitive
//
// const interestRate = 0.3;
// console.log(interestRate);
//
//
// let age = 26;
// let isApproved = true;
// let firstName = undefined;
// let selectedColor = null;
//
//
// // Reference Types (Object, Array, Function)
//
// //person object
// let person = {
//   name : "Cash",
//   age : 26
// };
// //dot notation
// person.name = "Dalvin";
//or
// //bracket notation
//person["name"] = "Mary";

// console.log(person.name);

//Dec/03/2019

// []<-- array
//['red', 'blue']<--array with two elements

f//let selectedColors = ['red', 'blue'];
//   selectColor[2] = 'green';<---how to add new elements to array, can also replace with a number with no ""


//Swapping variables
// let a = "red";
// let b = "blue";
// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

//hour
//if hour is between 6 am and 12 pm: good morning!
//if it is between 12pm and 6pm: good afternoon!
//otherwise: good evening!
// let hour = 10;
//
// if(hour >= 6 && hour < 12){
//     console.log("Good Morning");
// }else if(hour >= 12 && hour < 18){
//     console.log("Good Afternoon!");
// }else {
//     console.log("Good Evening!");
// }


//switch...case
// let role = "moderator";
//
// switch(role){
//     case 'guest':
//         console.log("Guest User");
//         break;
//
//     case'moderator':
//         console.log("Moderator User");
//         break;
//     default:
//         console.log("Unknown User");
//
// }

//if else version (cleaner code)
// if(role === "guest"){
//     console.log("guest");
// }else if(role === "moderator"){
//     console.log("Moderator");
// }else{
//     console.log("Unknown User");
// }


//for loop
//i = index
// for(let i = 0; i < 5; i++){
//     if( i % 2 !==0)//<---how to get odd numbers
//         console.log(i);
//     console.log("Hello World!");
// }

//Looping in reverse
for(let counter = 3; counter >=0; counter--){
    console.log(counter);
}



//while loop
// let i = 0;
// while(i <= 5){
//     if(i % 2 !==0) console.log(i);
//     i++;
// }



//do while loop

// let i = 0;
// do{
//     if(i % 2 !==0) console.log(i);
//     i++;
// }while(i <= 5);


//global scope

// const satellite = "The Moon";
// const galaxy = "The Milky Way!";
// const stars = "North Star";
//
// const callMyNightSky = () => {
//     return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
// };
// console.log(callMyNightSky());


//block scope
const logVisibleLightWaves = () => {
    const lightWaves = "Moonlight";
    console.log(lightWaves);

}
//call logVisibleLightWaves from outside the function
logVisibleLightWaves();


//Scope Pollution(when the global scope is to polluted)

//Global Scope Practice
const maleDog = "Mittly";
const femaleDog = "Pixie";

const callMyDogs = () => {
    return ("Will you please call my dogs, they're names are, " + maleDog + ", and "
 + femaleDog + ".");
};
console.log(callMyDogs);

//Block Scope Practice
const mittlyColor = () => {
    const mittlyColor = "Blue/White";
    console.log(mittlyColor);
}
mittlyColor();


//Arrays
//Declare a variable using const named hobbies and set it equal to an array with three empty strings inside it

const hobbies = ["", "", ""];
console.log(hobbies);


//Accessing Elements and index
const hello = "Hello World!";
console.log(hello[6]);//<-- accessing certain characters in a string

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Update Elements in an array
let groceryList = ["bread", "tomatoes", "milk"];//<---change the second element in the array (tomatoes) to avacado
groceryList[1] = "avacados";

//Looping through Arrays
const vacationSpots= ["Bali", "Paris", "Tulum"];
for(let i = 0; i < vacationSpots.length; i++){
    console.log("I would love to visit " + vacationSpots[i]);
}

//Nested Loops
const bobsFollowers = ["Abel", "Jim", "Mark", "Jane"];
const tinasFollowers = ["Abel", "Jim", "Brittany"];
const mutualFollowers = ["Abel", "Jim"];
for(let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j< tinasFollowers.length; j++){
        if(bobsFollowers[i] === tinasFollowers[j]){
            console.log(mutualFollowers);
        }
    }
}
//The While Loop
const cards = ["diamond", "spade", "heart", "club"];
let currentCard = 5;
while(currentCard !== "spade"){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

// Write a function named flatten that takes in an array of arrays. Return the flattened array.
function flatten(arr) {
    return arr.flat();
}

// Write a function definition named addOneToArray that adds one to every number in an array
function addOneToArray(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 1)
    }
    return newArr;
}


const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}


// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
function getTaxRate(shoppingCart){
    return shoppingCart.tax
}
assert(getTaxRate(shoppingCart), .08, "Exercise 96");
addToDone("Exercise 96 is complete");

// // Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// // We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
function numberOfItemTypes(shoppingCart){
    return shoppingCart.items.length;
}
assert(numberOfItemTypes(shoppingCart), 5, "Exercise 97");
addToDone("Exercise 97 is complete.")


function getAverageSpentPerItem(shoppingCart){
    let totalPrice = 0;
    let totalQuantity = 0;
    for(let i = 0; i < shoppingCart.items.length; i++){
        totalPrice += (shoppingCart.items[i].price * shoppingCart.items[i].quantity);
        totalQuantity += shoppingCart.items[i].quantity;
    }
    return(totalPrice / totalQuantity);
}
assert(getAverageSpentPerItem(shoppingCart), 1.333529411764706, "Exercise 100");
addToDone("Exercise 100 is complete.")


// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
function lowestPriceBook(obj){
    let leastExpensiveBook = false;
    for(let i = 0; i < obj.length; i++){
        if(!leastExpensiveBook || obj[i].price < leastExpensiveBook.price){
            leastExpensiveBook = obj[i];
        }
    }
    return leastExpensiveBook
}