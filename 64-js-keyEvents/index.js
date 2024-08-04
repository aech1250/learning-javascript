/*
    Event Listener => Listens for specific events to create interactive web apps

                      event: keyup, keydown
                      document.addEventListener(event, callback);

*/

const myBox = document.getElementById("box");
const moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {
    myBox.style.backgroundColor = `red`;
    myBox.textContent = `😨`;
})
document.addEventListener("keyup", event => {
    myBox.style.backgroundColor = `lightblue`;
    myBox.textContent = `😁`;
})


document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }


        x = Math.max(0, Math.min(x, window.innerWidth - myBox.offsetWidth));
        y = Math.max(0, Math.min(y, window.innerHeight - myBox.offsetHeight));

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
