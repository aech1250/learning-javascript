// variable = It is a container that store value.
//            It behaves as if it is the value that
//            it contains.
//            Variables should be unique means that 
//            they can't have same names.

// 1. Decleration:     let variable;
// 2. Assignment:      varibale = 1;
// 3. Both:            let variable = 1;

// Number Type

// let age = 21;
// let gpa = 3.61;

//     console.log(`I am ${age} years old.`)
//     console.log(`I have a Grade Point Average of ${gpa}`)

// console.log(`The type of variable \"age\" is;${typeof(age)}`)
// console.log(`The type of variable \"gpa\" is;${typeof(gpa)}`)

// String Type

// let firstName = "Hassan";
// let favoriateGame = "Far Cry 3";
// let email = "hassan@gmail.com"

//     console.log(`My name is ${firstName}`)
//     console.log(`My Favoriate Video Game is ${favoriateGame}`)
//     console.log(`My E-mail is ${email}`)

// console.log(`Type of Variable \"firstName\" is ${typeof(firstName)}`)
// console.log(`Type of Variable \"favoriateGame\" is ${typeof(favoriateGame)}`)
// console.log(`Type of Variable \"email\" is ${typeof(email)}`)

// Boolean Type

// let online = true;
// let forSale = true;
// let isStudent = true 

//     console.log(`I am online: ${online}`)
//     online = false;
//     console.log(`I am online: ${online}`)
//     console.log(`This car is for sale: ${forSale}`)
//     console.log(`Enrolled: ${isStudent}`)

// console.log(`Type of Variable \"online\" is ${typeof(online)}`)

// For Website

let fullName = "Hassan Amir";
let age = 21;
let isStudent = true;

document.getElementById("p-1").textContent = `I am ${fullName}.`;
document.getElementById("p-2").textContent = `I am ${age} years old.`;
document.getElementById("p-3").textContent = `It is ${isStudent} that I am a student.`;