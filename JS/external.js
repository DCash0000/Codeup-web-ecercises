"use strict"
console.log("Hello form external JavaScript.");
alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
var alertMessage = " Great, " + userInput + " is my favorite color too!";
alert(alertMessage);




var littleMermaid = prompt("How many days would you like to rent the Little Mermaid?");
var littleMermaidDay = parseInt(littleMermaid);

var brotherBear = prompt("How many days would you like to rent Brother Bear?");
var brotherBearDay = parseInt(brotherBear);

var hercules = prompt("How many days would you like to rent Hercules");
var herculesDay = parseInt(hercules);

alert((littleMermaidDay * 3) + (brotherBearDay * 3) + (herculesDay * 3));

var google = prompt("How many hours will you be working for Google?");
var googleRate = prompt("What is your Google Hourly Rate?");
var googleHours = parseInt(google);


var amazon = prompt("How many hours will you be working for Amazon?");
var amazonRate = prompt("What is your Amazon Hourly Rate?");
var amazonHours = parseInt(amazon);


var facebook = prompt("How many hours will you be working for Facebook?");
var facebookRate = prompt("What is your Facebook Hourly Rate?");
var facebookHours = parseInt(facebook);


var totalPay = ((googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate));
alert("Your total pay is :$" + totalPay);

var classAt8AM = confirm("Can you register for an 8am class?");
var classSize = prompt("What is the max capacity for this class?");
var currClassSize = prompt("What is the current class capacity?");
var canRegister = (currClassSize < classSize) && classAt8AM;
alert(canRegister);
//
var hasKrogerCard = confirm("Do you have a Kroger's Card?");
var cartSize = Number(prompt(("How many items do you have?")));
var offerValid = confirm("Is the offer valid?");
var canUseDiscount = offerValid && (hasKrogerCard || cartSize > 2);
alert("Can the discount be applied:" + canUseDiscount);

