//While Loop
//2.
var i = 2;
while(i <= 65536){
    console.log(i);
    i*=2;
}


//3
//step 1. generate total amount of cones
//step 2. customer wants to buy x amount of cones
//step 3. we need to check to see if we have that amount of cones available
//step 4. if not return "sorry message"
//step 5. if we do have enough cones return "happy message"
//step 6. subtract amount of cones sold from all cones
//step 7. repeat until i dont have any cones left, stops once all cones equals 0

// This is how you get a random number between 50 and 100
var allCones = (Math.floor(Math.random() * 50) + 50);
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do{
    //this is how many cones are purchased by each customer
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    //check to see if i have enough cones to sell
    if(conesPurchased > allCones){
        var sadConesMessage = "Cannot sell you " + conesPurchased + " I only have " + "..."
        console.log(sadConesMessage);
    }else{
        allCones -= conesPurchased;
        var happyConesMessage = conesPurchased + " cone sold ... " + allCones + " cones to go";
        console.log(happyConesMessage);
    }
}while(allCones > 0);
console.log("yay i sold all the cones");


