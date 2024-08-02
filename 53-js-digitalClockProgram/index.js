const displayTime = document.getElementById("display-time")

let hours;
let minutes;
let seconds;
let meridiem;

function padZero(num){
    return num < 10 ? `0${num}` : num;
}

function clock(){
    const date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    displayHours = hours % 12;

    meridiem = hours > 12 ? "PM" : "AM";

    displayTime.textContent = `${padZero(displayHours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`
}

setInterval(clock, 1000);