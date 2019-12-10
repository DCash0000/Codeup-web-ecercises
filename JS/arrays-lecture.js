// let person = {
//   name : "Cash",
//   age : 26
// };

let pets = [];
 pets[0] = "Toby";
 pets[1] = "Princess";
 pets[2] = "Sampson";
 pets[3] = "Jill";
 pets[4] = "Bubbles";
 pets[5] = "Malu";


//length is used to find out the size of that object
for(var i = 0; i < pets.length; i++){
    // console.log(pets[i]);
}

var i = 0;
while (i < pets.length){
    // console.log(pets[i]);;
    i++
}

let laptops = ["mac", "toshiba", "dell", "lenovo"];
for(let i = 0; i < laptops.length ; i++){
    // console.log(laptops[i]);

}

//push method adds items to the end of the array
var fruit = ["apple", "orange", "banana"];
// console.log(fruit);
fruit.push("pear");
// console.log(fruit);


//unshift adds items to the beginning of an array
fruit.unshift("kiwi");
// console.log(fruit);



//pop and shift used to remove items from an array



let drinks = ["soda", "tea", "water", "energy drink", "lemonade","tea", "kombucha"];
console.log(drinks);
// drinks.push("lemonade");
// console.log(drinks);
// drinks.unshift("powerade");
// console.log(drinks);
//
// let endRemoveItem = drinks.pop();
// console.log(endRemoveItem);
//
// let begRemoveItem = drinks.shift();
// console.log(begRemoveItem);

// let index = drinks.indexOf("tea");
// console.log(index);
//
// let indexA = drinks.lastIndexOf(("tea"));
// console.log(indexA);

// let slice = drinks.slice(1, 6);
// console.log(slice);
//
// slice = drinks.slice(3);
// console.log(slice);

// drinks.reverse();
// console.log(drinks);

// drinks.sort();
// console.log(drinks);

// let drinkArray = drinks.join(", ");
// console.log(drinkArray);

// let drank = "Good Drank";
// console.log(drank);
//
// let drankString = drank.split(", ");
// console.log(drankString);



//Take the first letter of each word and make it Upper Case
// var sentence = "The quick brown fox jumps over the lazy dog";
// var words = sentence.split(" ");
// for (var i = 0;i<words.length; i++) {
//  // capitalize first letter
//  var word = words[i];
//  // var firstLetter = word.split()[0];
//  var letters = word.split("");
//  var capitalFirstLetter = letters[0].toUpperCase();
//  var capitalizedWord = "";
//  capitalizedWord += capitalFirstLetter;
//  for (var j=1;j<letters.length;j++) {
//   capitalizedWord += letters[j];
//  }
//  words[i] = capitalizedWord;
// }
// words.reverse();
// sentence = words.join(" ");
// console.log(sentence);


