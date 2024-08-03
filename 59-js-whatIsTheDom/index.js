/*  
    DOM =>  Document Object Model
            Object{} that represent that page you see in the browser
            and provide you with an API to interact with it
            Web browser constructs a DOM when it loads an HTML document
            and struture all the elements in a tree-like representation
            Javascript can access the DOM dynamically to change the 
            content, structure, and style of a web page.
*/


// console.log(document);
// console.dir(document);
// document.title = "My website";


const username = "Aech";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username == "" ? "Guest" : username;
