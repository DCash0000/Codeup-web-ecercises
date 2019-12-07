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
// for(let i = 1; i <= 10; i++){
//     console.log("7 x 1 = " + i * 7);
//
// }


//4
// for(let i = 1; i <= 9; i++){
//     console.log(i);
// }


//5
// for(let i = 100; i >= 5; i++){
//     console.log(i);
//     i-=6;
// }


//break loops
// var numberToStopAt = 5;
// for(var i = 1; i < 100; i++) {
//     console.log(i);
//     if (i === numberToStopAt) {
//         console.log("We have reached the stopping point: break!");
//         break;
//         console.log("You will never see this line.");
//     }
// }


var numberToSkip = 27;
for(var i = 1; i < 50; i++) {
    console.log(i);
    if (i === numberToSkip) {
        console.log("Number to skip is: 27")
        break;
    }
}


