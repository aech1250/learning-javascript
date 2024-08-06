/*
    JSON => Javascript Object Notation is a data interchange format
            Used for exchanging data within a server and a web app.
            JSON files {key:value} OR {value1[], value2[], value3[]}

            JSON.stringify() = converts a JS object to a JSON string
            JSON.parse() = converts a JSON string to a JS object

*/ 

// const names = ["Hassan", "Adeel", "Muneeb", "Arshad"];

// const person = {
//     "name": "Hassan",
//     "age": 21,
//     "isStudent": true,
//     "gpa": 3.64,
//     "hobbies": [
//         "movies",
//         "videogames",
//         "coding"
//     ]
// };

// const people = [
//     {
//         "name": "Hassan",
//         "age": 21,
//         "isStudent": true,
//         "gpa": 3.64
//     },
//     {
//         "name": "Adeel",
//         "age": 21,
//         "isStudent": true,
//         "gpa": 3.12
//     },
//     {
//         "name": "Muneeb",
//         "age": 21,
//         "isStudent": true,
//         "gpa": 3.67
//     }
// ];

// const jsonString = JSON.stringify(people);

// console.log(jsonString);

// const jsonNames = `["Hassan", "Adeel", "Muneeb", "Arshad"]`;

// const jsonPerson = `{
//     "name": "Hassan",
//     "age": 21,
//     "isStudent": true,
//     "gpa": 3.64,
//     "hobbies": [
//         "movies",
//         "videogames",
//         "coding"
//     ]
// }`;

// const jsonPeople = `[
//     {
//         "name": "Hassan",
//         "age": 21,
//         "isStudent": true,
//         "gpa": 3.64
//     },
//     {
//         "name": "Adeel",
//         "age": 21,
//         "isStudent": true,
//         "gpa": 3.12
//     },
//     {
//         "name": "Muneeb",
//         "age": 21,
//         "isStudent": true,
//         "gpa": 3.67
//     }
// ]`;

// const jsNames = JSON.parse(jsonNames);
// const jsPerson = JSON.parse(jsonPerson);
// const jsPeople = JSON.parse(jsonPeople);

// console.log(jsPeople);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => {
        console.log(value.age);
    }))
    .catch(error => console.error(error));