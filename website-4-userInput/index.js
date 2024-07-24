// Ways to get User Input in Javascript

// 1. Easy way => window prompt
// 2. Professional way => html tags (input, textarea) 

// Easy Way:

// let userName = window.prompt("Enter you username: ");
//     console.log(`Your User Name is: ${userName}`)

// Professional Way:   

// Using input tag
let username = "";

    document.getElementById("myInputSubmit").onclick = function(){
        username = document.getElementById("myInput").value;
        document.getElementById("myUsername").textContent = `Hello ${username}`;
    }

//Using textarea tag
let paragraph = "";

    document.getElementById("myTextareaSubmit").onclick = function(){
        paragraph = document.getElementById("myTextareaInput").value;
        document.getElementById("myParagraph").textContent = paragraph;
    }

