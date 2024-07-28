// Method Chaining =>   Calling on method one after another
//                      in one continuos line of code

// -------------------Method Chaining-----------------
// let userName = window.prompt("Enter you username: ");
//     userName = userName.replaceAll(" ", "");

// let firstChar = userName.charAt(0);
//     firstChar = firstChar.toUpperCase();

// let otherChars = userName.slice(1);
//     otherChars = otherChars.toLowerCase();

//     userName = firstChar + otherChars;
//     console.log(userName);
// -------------------No Method Chaining--------------
let userName = window.prompt("Enter username: ");

    userName = userName.replaceAll(" ", "").charAt(0).toUpperCase() + userName.replaceAll(" ", "").slice(1).toLowerCase();

    console.log(userName);