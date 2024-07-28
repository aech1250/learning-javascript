// String Slicing => Create a substring from
//                   the portion of another
//                   string.

const fullName = "Hassan Amir";

// let firstName = fullName.slice(0, 6)
// let lastName = fullName.slice(7)

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstChar)
// console.log(lastChar)

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1);

// console.log(firstName);
// console.log(lastName);

const email = "hassanamir1250@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);