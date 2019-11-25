var a = 1;
var b = a++;
var c = ++a;
console.log(a);
console.log(b);
console.log(c);

var d = "hello";
var e = false;
console.log(d++);
console.log(e++);

var preplexed;
console.log(preplexed + 2);

var price = 2.7;
price = price.toFixed(2);
console.log(price);

price = "2.7";
console.log(price);

console.log(isNaN(0));
console.log(isNaN(1));
console.log(console.log(1));
console.log(isNaN(""));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN(false));
console.log(NaN = NaN);

// (!true);
console.log(!true);
// !false;
console.log(!false);
// !!true;
console.log(!!true);
// !!false;
console.log(!!false);
// !!0;
console.log(!!0);
// !!-0;
console.log(!!-0);
// !!1;
console.log(!!1);
// !!-1;
console.log(!!-1);
// !!0.1;
console.log(!!0.1);
// !!"hello";
console.log(!!"hello");
// !!"";
console.log(!!"");
// !!'';
console.log(!!'');
// !!"false";
console.log(!!false);
// !!"0";
console.log(!!"0");
//
var sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toLocaleUpperCase());
console.log(sample += " Students");
console.log(sample = sample.replace("Students", "Class"));
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p")+1));



var littleMermaid = 3;
console.log(littleMermaid * 3);
var brotherBear = 5;
console.log(brotherBear * 3);
var hercules = 1;
console.log(hercules * 3);
console.log((littleMermaid * 3) + (brotherBear * 3) + (hercules * 3));

var google = 400;
console.log(google * 6);
var amazon = 380;
console.log(amazon * 4);
var facebook = 350;
console.log(facebook * 10);
console.log((google * 6) + (amazon * 4) + (facebook * 10));

var classAt8AM = false;
var classSize = 125;
var currClassSize = 108;
var canRegister = (currClassSize < classSize) && !classAt8AM;
console.log(canRegister);

var hasKrogerCard = true;
var cartSize = 6;
var offerValid = true;
var canHasDiscount = offerValid && (cartSize > 2 || hasKrogerCard);
console.log(canHasDiscount);

var username = "codeup";
var password = "notastrongpassword";
var atLeastFivePass = password.length >= 5;
var usernameNotInPass = password.indexOf(username) === -1;
console.log(atLeastFivePass);
console.log(usernameNotInPass);
var userNameNotAParagraph = username.length <= 20;
console.log(userNameNotAParagraph);
var noWhiteSpace = username.trim() === username && password.trim() === password;
console.log(noWhiteSpace);


















