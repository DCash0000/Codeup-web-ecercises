console.log("Hello form external JavaScript.");
alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
console.log(" Great, blue is my favorite color too!");




var littleMermaid = prompt("How many days would you like to rent the Little Mermaid?");
var littleMermaidDay = parseInt(littleMermaid);


var brotherBear = prompt("How many days would you like to rent Brother Bear?");
var brotherBearDay = parseInt(brotherBear);

var hercules = prompt("How many days would you like to rent Hercules");
var herculesDay = parseInt(hercules);

alert((littleMermaidDay * 3) + (brotherBearDay * 3) + (herculesDay * 3));


var google = prompt("How many hours will you be working for Google?");
var googleHours = parseInt(google);


var amazon = prompt("How many hours will you be working for Amazon?");
var amazonHours = parseInt(amazon);


var facebook = prompt("How many hours will you be working for Facebook?");
var facebookHours = parseInt(facebook);


alert((googleHours * 400) + (amazonHours * 380) + (facebookHours * 350));

var classAt8AM = confirm("Can you register for an 8am class?");
var classSize = prompt("What is the max capacity for this class?");
var currClassSize = prompt("What is the current class capacity?");
var canRegister = (currClassSize < classSize) && !classAt8AM;
alert(canRegister);

var hasKrogerCard = confirm("Do you have a Kroger's Card?");
var cartSize = confirm("Do you have more than 2 item's in cart?");
var offerValid = confirm("Is the offer valid?");
var canUseDiscount = offerValid && hasKrogerCard && cartSize;
alert(canUseDiscount);






