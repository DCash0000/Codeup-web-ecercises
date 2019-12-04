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
//
// //bracket notation
// console.log(person.name);

//Dec/03/2019

// []<-- array
//['red', 'blue']<--array with two elements
//let selectedColors = ['red', 'blue'];
//   selectColor[2] = 'green';<---how to add new elements to array, can also replace with a number with no ""


//Swapping variables
let a = "red";
let b = "blue";
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//hour
//if hour is between 6 am and 12 pm: good morning!
//if it is between 12pm and 6pm: good afternoon!
//otherwise: good evening!
let hour = 10;

if(hour >= 6 && hour < 12){
    console.log("Good Morning");
}else if(hour >= 12 && hour < 18){
    console.log("Good Afternoon!");
}else {
    console.log("Good Evening!");
}


//switch...case
let role = "moderator";

switch(role){
    case 'guest':
        console.log("Guest User");
        break;

    case'moderator':
        console.log("Moderator User");
        break;
    default:
        console.log("Unknown User");

}

//if else version (cleaner code)
if(role === "guest"){
    console.log("guest");
}else if(role === "moderator"){
    console.log("Moderator");
}else{
    console.log("Unknown User");
}