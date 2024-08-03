/*
    Element Selector => Methods used to target and manipulate
                        HTML elements.
                        They allow you to select one or multiple
                        HTML elements from the DOM (Document Object Model).

    1. document.getElementById()        => ELEMENT OR NULL
    2. document.getElementByClassName() => HTML COLLECTION
    3. document.getElementByTagName()   => HTML COLLECTION
    4. document.querySelector()         => ELEMENT OR NULL
    5. document.querySelectorAll()      => NODELIST
*/ 

// const heading = document.getElementById("my-heading");
// const headingStyle = heading.style;

// console.log(heading);

// headingStyle.backgroundColor = "Yellow";
// headingStyle.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// })
   
// const h4Elements = document.getElementsByTagName("h4");
// const listItemElements = document.getElementsByTagName("li");

// for(let element of h4Elements){
//     element.style.backgroundColor = "yellow"
// }

// for (let element of listItemElements){
//     element.style.backgroundColor = "lightGreen"
// }

// Array.from(h4Elements).forEach(element => {
//     element.style.backgroundColor = "yellow"
// })

// Array.from(listItemElements).forEach(element => {
//     element.style.backgroundColor = "lightGreen"
// })

// const element = document.querySelector("li");
// element.style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

foods[0].style.backgroundColor = "yellow";