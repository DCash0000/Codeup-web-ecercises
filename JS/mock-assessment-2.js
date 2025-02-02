"use strict";
//Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num up to length.
//First create function and function parameters
//Second create a variable for the multiples that accepts an array
//third create a for loop so that the code can be run through the array
//create the argument you want the for loop to execute
//set the var of i for index at zero
//This means that the index is used as an offset.
// **The first element of the array is exactly contained in the memory location that array refers (0 elements away),
// so it should be denoted as array[0]. Most programming languages have been designed this way, so indexing from 0 is pretty much inherent to the language
//the next piece of the argument states that as long as i is less than the length of numbers in an array add 2
 function multiplesOf(numbers, number) { // add second argument
    var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
     for (var i = 0; i < numbers.length; i++) {
         if (numbers[i] % number === 0) { // divide by the number
            multiples.push(numbers[i]); // add the current multiple found to the multiples array
        }
    }

    return multiples;
}
 console.log(multiplesOf([4, 5, 6, 7, 8], 2)); // Output: [4, 6, 8

//Given a total due and an array representing the amount of change in your pocket,
// determine whether or not you are able to pay for the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
//since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50
//create a function called changeEnough
//Takes in two arguments amount of change and amount due
//create variables to identify the amount of change
//create a variable that contains change variable
//create if condition argues change versus amount due
//create else if argument that states false if you don't have enough change
             function changeEnough(change, amountDue) {
                 var quart = change[0]*0.25;
                 var dimes = change[1]*0.10;
                 var nickel = change[2]*0.05;
                 var pennies = change[3]*0.01;
                 var result = quart+dimes+nickel+pennies;
                 if(result >= amountDue){
                     return true;
                 }
                 else if(result < amountDue){
                     return false;
                 }
             }
             console.log(changeEnough([2, 100, 0, 0], 14.11));




/*TODO Problem 1 - 'Sum Array' from Code Wars
Write a method named sum that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals. The numbers can also be negative. If the array does not contain any numbers then you should return 0.
​
Examples:
numbers = [1, 5.2, 4, 0, -1];
9.2
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.*/
​
function sum(numbers) {
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(sum([1, 5.2, 4, 0, -1])); // outputs 9.2
console.log(sum([2, 3, 4, 5, 6])); // outputs 20
console.log(sum([10.5, 50.3, -100, 77.7, 230])); //output 268.5

/*TODO Problem 2 - 'Remove String Spaces' from Code Wars
Simple, remove the spaces from the string, then return the resultant string.
*/
​
function noSpace(x) {
    let xArray = x.split("");
    let returnArray = [];
    console.log(xArray);
    for (let i = 0; i < xArray.length; i++) {
        if (xArray[i] !== "") {
            returnArray.push(xArray[i]);
        }
    }
    return returnArray.join("");

}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // output '8j8mBliB8gimjB8B8jlB'
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // output '88Bifk8hB8BB8BBBB888chl8BhBfd'
console.log(noSpace('8aaaaa dddd r     ')); // output '8aaaaaddddr'


/*TODO Problem 3 - 'Numbers to Letters' on Code Wars
Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
​
All inputs will be valid.
*/
​
function switcher(x) {
    var alphabet = " ?!abcdefghijklmnopqrstuvwxyz ";
    var reverseAlphabetArray = alaphabet.split("").reverse();
    var returnString = "";
    console.log(reverseAlphabetArray);
}
for(var i = 0; i < x.length; i++){
    returnString += reverseAlphabetArray[x[i]];
}

return returnString;


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // outputs 'codewars'
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); // outputs 'btswmdsbd kkw'
console.log(switcher(['4', '24'])); // outputs 'wc'

/* TODO Problem 4 - 'Convenience Store' on Edabit
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
changeEnough([10, 0, 0, 50], 3.85) ➞ false
changeEnough([1, 0, 5, 219], 19.99) ➞ false
Notes
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01*/
​
function changeEnough(change, amountDue) {
​
}
​
/*console.log(changeEnough([2, 100, 0, 0], 14.11)); // outputs false
console.log(changeEnough([0, 0, 20, 5], 0.75)); // outputs true
console.log(changeEnough([30, 40, 20, 5], 12.55)); // outputs true
console.log(changeEnough([10, 0, 0, 50], 3.85)); // outputs false
console.log(changeEnough([1, 0, 5, 219], 19.99)); // outputs false*/
​
​
/*TODO Problem 5 - 'Volume of a Box' from Edabit
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
Notes
Don't forget to return the result.
Remember that the values are in an object.*/
​
function volumeOfBox(sizes) {
    return sizes.width * sizes.height * sizes.length;
}

console.log(volumeOfBox({width: 2, length: 5, height: 1})); // outputs 10
console.log(volumeOfBox({width: 4, length: 2, height: 2})); // outputs 16
console.log(volumeOfBox({width: 2, length: 3, height: 5})); // outputs 30*/


/*TODO Problem 6 - 'Return the Objects Keys and Values' from Edabit
Create a function that takes an object and returns the keys and values as separate arrays.
​
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]*/
​
function keysAndValues(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    return [keys, values];
}

console.log(keysAndValues({a: 1, b: 2, c: 3})); // outputs [["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"})); // outputs [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({key1: true, key2: false, key3: undefined})); // outputs [["key1", "key2", "key3"], [true, false, undefined]]*/


/*TODO Problem 7 - 'Who's The Oldest?' from Edabit
Given an object containing the names and ages of a group of people, return the name of the oldest person.
​
Examples
oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
}) ➞ "Emma"
​
oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
}) ➞ "Sam"
Notes
All ages will be different.*/
​
let oldest = function (people) {
    let oldestAge = 0;
    let oldestAgeName = "";
    let nameArray = Object.values(people);
    let ageArray = Object.values(people);
    for(let i = 0; i < ageArray.length; i++){
        if(ageArray[i] > oldestAge){
            oldestAge = ageArray[i];
            oldestAgeName = nameArray[i];
        }
    }
    return oldestAgeName;
};

console.log(oldest({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29
})); // outputs "Emma"
​
console.log(oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33
})); // outputs "Sam"*/



/*TODO Problem 8 - 'Longest Streak' from Edabit
Create a function that takes an array of date objects and return the "longest streak" (i.e. number of consecutive days in a row).
​
Example
longestStreak([
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-20"
  },
  {
    "date": "2019-09-26"
  },
  {
    "date": "2019-09-27"
  },
  {
    "date": "2019-09-30"
  }
]) ➞ 3*/
​
function longestStreak(arr) {
    let milliSecsInDay = 86400000;
    let difference;
    let currentDate;
    let previousDate;
    let consecutiveDays = 1;
    let maxConsecutiveDays = 1;
    if (arr.toString() === "") {
        return 0;
    }
    for (let i = 1; i < arr.length; i++) {
        currentDate = Date.parse(arr[i].date);
        previousDate = Date.parse(arr[i - 1].date);
        difference = (currentDate - previousDate) / milliSecsInDay;

        if (difference !== 1) {
            consecutiveDays = 1;
        } else if (difference === 1) {
            consecutiveDays++;
            if (consecutiveDays > maxConsecutiveDays) {
                maxConsecutiveDays = consecutiveDays;
            }
        }
    }
    return maxConsecutiveDays;
}
​
console.log(longestStreak([
    {
        "date": "2019-09-18"
    },
    {
        "date": "2019-09-19"
    },
    {
        "date": "2019-09-20"
    },
    {
        "date": "2019-09-26"
    },
    {
        "date": "2019-09-27"
    },
    {
        "date": "2019-09-30"
    }
])); // outputs 3
​
console.log(longestStreak([])); // outputs 0*/
Collapse



