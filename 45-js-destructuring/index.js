/*
    destructuring => extract values from array and object
                     then assign them to variables in a
                     convenient way
                     [] = to perform array destructuring
                     {} = to perform object destructuring
                     5 examples
*/

//----------------Example 1------------------------------
//--------Swap a value of two variables------------------

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(`a: ${a}`);
// console.log(`b: ${b}`);

//----------------Example 2-------------------------------
//--------Swap a element in an array----------------------

// const arr = ["red", "green", "blue", "black", "white"];

// [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

// console.log(arr);

//----------------Example 3-------------------------------
//--------Assign array elements to vaiable----------------

// const arr = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = arr;

// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extraColors)

//----------------Example 4-------------------------------
//--------Extract values from objects---------------------

// const person1 = {
//     firstName: "Arshad",
//     lastName: "Ali",
//     age: 20,
//     job: "none"
// }
// const person2 = {
//     firstName: "Adeel",
//     lastName: "Akhtar",
//     age: 21
// }

// const { firstName, lastName, age, job = "Unemployeed" } = person2;

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)

//----------------Example 5-------------------------------
//--------Destructure in function parameters--------------

function displayPerson({ firstName, lastName, age, job = "Unemployeed" }) {
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Age: ${age}`)
    console.log(`Job: ${job}`)
}

const person1 = {
    firstName: "Arshad",
    lastName: "Ali",
    age: 20,
    job: "Student"
}
const person2 = {
    firstName: "Adeel",
    lastName: "Akhtar",
    age: 21
}

displayPerson(person1);