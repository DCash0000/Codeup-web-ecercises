"use strict";


// Define a function named isString that takes in a value and returns a boolean if the argument provided is a string or not.

function isString(value) {
    return typeof value === "string";
}





// console.log(isString(2)); //false
// console.log(isString(true)); //false
// console.log(isString("yes")); //true


// Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.

function isNotString(input){
    if(typeof(input) !== "string"){
        return true;
    }else{
        return false;
    }
}

function isNotString(input){
    return typeof (input) !== "string";
}


console.log(isNotString(2)); //true
console.log(isNotString(true)); //true
console.log(isNotString("yes")); //false



// Define a function named isNotEmptyString that takes in a value and returns a boolean if the argument provided is an empty string or not.


function isNotEmptyString(value){
    return typeof value == "string" && value.length > 0;
}

//
// console.log(isNotEmptyString(2)); //false
// console.log(isNotEmptyString(false)); //false
// console.log(isNotEmptyString(true)); //false
// console.log(isNotEmptyString("yes")); //true
// console.log(isNotEmptyString("")); //false
// console.log(isNotEmptyString("banana")); //true


// Define a function named isANumber that takes in a value and returns true if the input is a number.

function isANumber(value){
    if(typeof value === "number"){
        return true;
    }else{
        return false;
    }
}

function isANumber(value){
    return typeof value === "number";
}

// console.log(isANumber(2)); //true
// console.log(isANumber("yes")); //false
// console.log(isANumber(false)); //false
// console.log(isANumber(true)); //false
// console.log(isANumber("5")); //false


// Define a function named isNumeric that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.


function isNumeric(value){
    if(!isNaN(parseFloat(value))){
        return true;
    }else{
        return false;
    }
}

function isNumeric(value){
    return !isNaN(parseFloat(value));
}


// console.log(isNumeric(2)); //true
// console.log(isNumeric("yes")); //false
// console.log(isNumeric(false)); //false
// console.log(isNumeric(true)); //false
// console.log(isNumeric("5")); //true


// Define a function named isTen that will return true when passed an argument of the numeric value 10, and return false for all other arguments.

function isTen(arg){
    var arg1 = parseInt(arg);
    if(arg1 === 10){
        return true;
    }else{
        return false;
    }
}

function isTen(arg){
    var arg1 = parseInt(arg);
    return arg1 === 10;
}


// console.log(isTen(2)); //false
// console.log(isTen(12)); //false
// console.log(isTen("yes")); //false
// console.log(isTen(false)); //false
// console.log(isTen(true)); //false
// console.log(isTen("5")); //false
// console.log(isTen(10)); //true
// console.log(isTen("10")); //true


// Define a function named isMoreThanTen that accepts a number and returns true or false based on whether the input is more than ten.

function isMoreThanTen(number){
    if (number > 10){
        return true;
    }else{
        return false;
    }
}

function isMoreThanTen(number){
    return number > 10;
}


// console.log(isMoreThanTen(2)); //false
// console.log(isMoreThanTen(12)); //true
// console.log(isMoreThanTen("yes")); //false
// console.log(isMoreThanTen(false)); //false
// console.log(isMoreThanTen(true)); //false
// console.log(isMoreThanTen("5")); //false



// Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.

function isNegative(input){
    var input = (parseFloat(input));
    if((input <= 0) && (typeof input == "number")){
        return true;
    }else{
        return false;
    }
}

function isNegative(input) {
    var input = (parseFloat(input));
    return (input <= 0) && (typeof input == "number");
}

// console.log(isNegative(-2)); //true
// console.log(isNegative(12)); //false
// console.log(isNegative("yes")); //false
// console.log(isNegative(false)); //false
// console.log(isNegative(true)); //false
// console.log(isNegative("5")); //false

