"use strict";

// for loop
// i = index
// for(let i = 0; i < 5; i++){
//     if( i % 2 !==0)//<---how to get odd numbers
//         console.log(i);
//     console.log("Hello World!");
// }
//
// for (var i = 0; i <= 5; i++){
//     console.log(i);}
// var i = 10;
// while(i <= 70){
//     console.log(i);
//     i*=1
// }

// var i = 100;
// while(i >= 5){
//     console.log(i);
//     i-=5;
// }

//for loops
//2
for(let i = 1; i <= 10; i++){
    console.log("7 x " + i + " = " + i * 7);
}

//3
let randomNumbers = Math.floor(Math.random() * 181) + 20;
for(let i = 1; i <= 10; i++) {
    randomNumbers = Math.floor(Math.random() * 181) + 20;
    if (randomNumbers % 2 === 0) {
        console.log(randomNumbers + " is even");
    } else {
        console.log(randomNumbers + " is odd");
    }
}



//4
for(let i = 1; i <= 9; i++){
    let stringNumbers = "";
    for(let j = 1; j <= i; j++){
        stringNumbers += i;
    }
    console.log(stringNumbers);
}
//or the .repeat method

for(let i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}



//5
for(let i = 100; i >= 5; i++){
    console.log(i);
    i-=6;
}




