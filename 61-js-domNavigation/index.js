/*
    DOM Navigation => The process of navigating to the struture of
                      an HTML document using Javascript.

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

//--------------------.firstElementChild----------------------

// const element = document.getElementById("deserts");
// const firstChild = element.firstElementChild;
//       firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(element => {
//     const firstChild = element.firstElementChild;

//     firstChild.style.backgroundColor = "yellow";
// })

//--------------------.lastElementChild----------------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
//       lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(e => {
//     const lastChild = e.lastElementChild;
//           lastChild.style.backgroundColor = "yellow";
// })

//--------------------.nextElementSibling----------------------

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
//       nextSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("fruits");
//       secondChild = element.firstElementChild.nextElementSibling;
//       secondChild.style.backgroundColor = "yellow";

// const element = document.getElementById("vegetables");
//       nextSibling = element.nextElementSibling;
//       nextSibling.style.backgroundColor = "yellow"


//--------------------.previousElementSibling------------------

// const element = document.getElementById("orange");
// const previousSibling = element.previousElementSibling;
//       previousSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("vegetables");
//       previousSibling = element.previousElementSibling;
//       previousSibling.style.backgroundColor = "yellow";

//--------------------.parentElement----------------------

// const element = document.getElementById("apple");
// const parent = element.parentElement;
//       parent.style.backgroundColor = "yellow";

//--------------------.children----------------------

// const element = document.getElementById("fruits");
// const kids = element.children;

// Array.from(kids).forEach(kid => {
//     kid.style.backgroundColor = "yellow";
// })

// let i = 0;
// let previous = kids[0];

// setInterval(() => {
//     i = i % 3;
//     previous.style.backgroundColor = "white";
//     kids[i].style.backgroundColor = "yellow";
//     previous = kids[i];
//     i++;
// }, 1000);

