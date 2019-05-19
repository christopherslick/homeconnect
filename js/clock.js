function clockStart() {
    var today = new Date();
    var hour = today.getHours();
    var mins = today.getMinutes();
    var secs = today.getSeconds();
//setting the Am/PM based on whether or not it is over 12
    if(hour < 12){
      ampm = "<span>AM</span>";
    }else{
      ampm = "<span>PM</span>";
    }
    //converting from military time
    if(hour ==0){
      hr = 12;
    }else{
      hour = hour;
    }
    //converting from military time
    if(hour > 12){
      hour = hour - 12;
    }else{
      hour = hour;
    }
    //call to get time in case you need to add a 0 in front
    hour = getTime(hour);
    mins = getTime(mins);
    secs = getTime(secs);
    document.getElementById("time").innerHTML = hour + ":" + mins + ":" + secs + " " + ampm;
//date stuff
    var monthslist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayslist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var weekDay = dayslist[today.getDay()];
    var day = today.getDate();
    var month = monthslist[today.getMonth()];
    var year = today.getFullYear();
    var date = weekDay+", "+day+" "+month+" "+year;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function(){ clockStart() }, 1000);
}
//adding a zero in front if needed
function getTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
