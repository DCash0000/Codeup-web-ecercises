(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

 // let planetsUl = "<ul><li>" + planets.join("</li><li>") + "</ul></li>";
 //    console.log(planetsUl);

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // console.log(planets);

    // planets.unshift("Sun");
    // console.log(planets);

    // console.log('Adding "Pluto" to the end of the planets array.');
    // console.log(planets);

    // planets.push("Pluto");
    // console.log(planets);

    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // console.log(planets);

    // let firstItem = planets.shift();
    // console.log(firstItem);


    // console.log('Removing "Pluto" from the end of the planets array.');
    // console.log(planets);

    // let lastItem = planets.pop();
    // console.log(lastItem);


    // console.log('Finding and logging the index of "Earth" in the planets array.');

    // let index = planets.indexOf("Earth");
    // console.log(index);

    // console.log("Reversing the order of the planets array.");
    // console.log(planets);

    // planets.reverse();
    // console.log(planets);

    // console.log("Sorting the planets array.");
    // console.log(planets);

    // planets.sort();
    // console.log(planets);

    // Create a function that returns true if a string is empty and false otherwise.
    function isEmpty(s){
        if(s === ""){
            return true;
        }else{
            return false;
        }
    }

    console.log(isEmpty("a"));

})();
