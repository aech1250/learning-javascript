const displayTime = document.getElementById("display-time")

let hours;
let minutes;
let seconds;
let meridiem;

function clock(){
    const date = new Date();
    hours = date.getHours();
    meridiem = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    minutes = date.getMinutes().toString().padStart(2, 0);
    seconds = date.getSeconds().toString().padStart(2, 0);


    displayTime.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`
}

setInterval(clock, 1000);