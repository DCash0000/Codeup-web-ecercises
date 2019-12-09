//break loops
//3
var numberToSkip = 27;
for(var i = 1; i < 50; i++) {
    // check for odds
    if (i % 2 !== 0) {
        // check for numberToSkip
        if(i === numberToSkip){
            console.log("Yikes! Skipping number: "  + i);
            continue;
        }
        // if continued, then this section of code will never run
        console.log("Here is an odd number: " + i);
    }
}