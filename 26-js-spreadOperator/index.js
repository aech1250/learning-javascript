/*
    spread operator => ...allows an iterable such as an
                          array or string to be expanded
                          into seperate elements
                          kunpacks the elements)
*/

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// console.log(max)
// console.log(min)

// let userName = "Hassan Amir";
// let letterOfUserName = [...userName].join("-");

// console.log(letterOfUserName);

let fruits = ["banana", "apple", "mango"];
let vegetables = ["potato", "onion", "garlic"]

let foods = [...fruits, ...vegetables]

console.log(foods);