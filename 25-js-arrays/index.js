// arrays => a variable like structure that can store more than one value

let fruits = ["banana", "apple", "mango"];

fruits.push("kiwi");
// fruits[3] = "grape"; // add an element to array
// fruits.push("Date"); // add an element to array using function
// fruits.pop();
// fruits.unshift("apple");
// // fruits.shift();
// console.log(fruits);
// console.log(fruits.length)
// console.log(fruits.indexOf("apple"))
// fruits.sort();
// fruits.sort().reverse();

// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

for(let fruit of fruits){
    console.log(fruit);
}