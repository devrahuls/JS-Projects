setInterval(()=>{

let hourr = new Date();

document.getElementById("hoursid").innerHTML = (hourr.getHours())


let mins = new Date();

document.getElementById("minutesid").innerHTML = (mins.getMinutes())


let secs = new Date()

document.getElementById("secondsid").innerHTML = (secs.getSeconds())



if (hourr < 13){
    document.getElementById("ampmid").innerHTML = "AM"
}
else{
    document.getElementById("ampmid").innerHTML = "PM"
}

});