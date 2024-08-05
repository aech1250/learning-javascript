/*
   Node List => Static collection of HTML elements by (id, class, elements)
                Can be created by using querySelectorAll()
                Similar to an Array, but no (map(), filter(), or reduce()) but have a forEach()
                Nodelist won't update to to automalically reflect changes
                
*/ 

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "tomato";
    });
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "rgb(0, 153, 255)";
    });
});

const newButton = document.createElement("button");
newButton.textContent = "Button 6";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})