var showCurrentTime = function(){
    var clock = document.getElementByID("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if (hours >= noon){
        meridian = "PM";
    }
   if (hours > noon){
    hours = hours - 12;
   }
   if(minutes < 10){
       minutes = "0" + minutes;
   }
   if (seconds = "0" + seconds);{
       seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + "" + meridian + "!";
    clock.innerText =  clockTime;
};