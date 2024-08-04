/*
    Event Listensers => Listens for specific events to create 
                        interactive web pages
                        
                        Events: click, mouseover, mouseout

                        .addEventListenser(event, callback);
*/

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");


// myBox.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Ouch! 🤕";
// });

// myBox.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't you dare! 😠"
// });

// myBox.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😁"
// });

myBtn.addEventListener("click", (event) => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 🤕";
});

myBtn.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't you dare! 😠"
});

myBtn.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😁"
});