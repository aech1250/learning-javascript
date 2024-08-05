/*
    Class List => Element property in Javascript used to interact
                  with an element's list of classes (CSS classes)
                  Allows you to make reusable classes for many elements
                  across you webpage.

    add()
    remove()
    toggle(Remove if not, Add if not)
    replace(oldClass, newClass)
    contains()

*/ 

// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myButton.addEventListener("mouseover", event => {
//     myButton.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout", event => {
//     myButton.classList.toggle("hover");
// })

// myH1.addEventListener("click", event => {
//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "🤬";
//     } else {
//         myH1.classList.replace("enabled", "disabled");
//     }
// })

// myButton.addEventListener("click", event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }else{
//         myButton.classList.replace("enabled", "disabled");
//     }
// })

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }else{
            event.target.classList.replace("enabled", "disabled");
        }
    })
})