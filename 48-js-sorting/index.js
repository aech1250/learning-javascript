/*
    sorting => method used to sort element of an array
               Sort element as strings in lexicographical order,
               not in alphabetical order

               lexicographical order = (alphabets, numbers, sybmols) as string

*/ 

let fruits = ["apple", "orange", "coconut", "banana", "grape"];
let numbers = [7, 4, 8, 6, 5, 2, 3, 1, 10, 9];
const people = [{name: "Hassan", age: 21, gpa: 3.64}, 
                {name: "Muneeb", age: 21, gpa: 3.67}, 
                {name: "Adeel", age: 21, gpa: 3.14}, 
                {name: "Sameed", age: 21, gpa: 3.12},
                {name: "Arshad", age: 20, gpa: 3.46}]

fruits.sort();
numbers.sort((a, b) => a - b); //in order based on numberic value
numbers.sort((a,b) => b - a ); //in reverse order based on numberic value
people.sort((a, b) => b.gpa - a.gpa); // arrange object in lexicographical order based on their numeric value
people.sort((a, b) => a.name.localeCompare(b.name)); // arrange object in lexicographical order based on their string value 

console.log(fruits);
console.log(numbers);
console.log(people);