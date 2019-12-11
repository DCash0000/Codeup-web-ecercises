// var car = {
//     make: "Toyota",
//     model: "Camry",
//     year: "2016",
//     isTitled: true,
//     options: ["4 wheel drive", "heated seats", "leather interior"],
//     goGoGo: function (key) {
//         if (key == "key") {
//             console.log("vroom");
//         } else {
//             console.log("...");
//         }
//     }
// }
// console.log("Car was made in " + car.year);
// console.log("Car has these options:");
// car.options.forEach(function (option){
//     console.log(option);
// })
// car.goGoGo(("key"));


// var car = {
//     make: "Mercedes-Benz",
//     model: "C-300",
//     year: "2015",
//     color: "Grey",
//     isTitled: true,
//     options: ["All Wheel Drive", "Powered Seats", "leather interior", "Moon Roof","Panoramic Roof"],
//     goGoGo: function (button) {
//         if (button == "button") {
//             console.log("open roof");
//         } else {
//             console.log("...");
//         }
//     }
// };
// console.log("Make of car is: " + car.make);
// console.log("Model of car is " + car.model);
// console.log("Year car was made: " + car.year);
// console.log("Color of " + car.make + " is " + car.color);
// car.options.forEach(function(options){
//     console.log("Car options: " + options);
// });
// car.goGoGo(("button"));


// var cars = [
//     car,
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2015,
//         report: function(){
//             console.log(this.year + " " + this.make + " " + this.model);
//
//         }
//     },
//     {
//         make: "Ford",
//         model: "Shelby GT 500",
//         year: 1969,
//         report: function(){
//             console.log(this.year + " " + this.make + " " + this.model);
//
//         }
//     },
//     {
//         make: "Cadillac",
//         model: "Escalade",
//         year: 2019,
//         report: function(){
//             console.log(this.year + " " + this.make + " " + this.model);
//         }
//     }
// ];
// car.report = function(){
//         console.log(this.year + " " + this.make + " " + this.model);
// };
// cars.forEach(function(car){
//     car.report();
// });

var dogs = [
    {
        name: "Mittly",
        sex: "Male",
        breed: "French Bulldog",
        age: 2,
        report: function(){
            console.log(this.sex + " " + this.breed + " " + this.name + " is " + this.age);
            }
    },
    {
        name: "Pixie",
        sex: "Female",
        breed: "French Bulldog",
        age: 1,
        report: function(){
            console.log(this.sex + " " + this.breed + " " + this.name + " is " + this.age);
        }

    }
];
dogs.report = function () {
    console.log(this.sex + " " + this.breed + " " + this.name + " is " + this.age);
};
dogs.forEach(function(dogs){
    dogs.report();
});