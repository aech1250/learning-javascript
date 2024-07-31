/*  
    arrow functions => concise way to write function expressions
                       good for simple function that you use only once
                       (parameters) => do some code
*/


//------------Simple Function----------------------
// function hello(){
//     console.log(`Hello`)
// }

//---Function expression using simple function----
// const hello = function hello(){
//                 console.log(`Hello`);
//               }

//---Function expression using arrow function------
// const hello = (name, age) => {
//     console.log(`Hello, ${name}.`);
//     console.log(`You're, ${age} years old.`);
// }

// hello(`Hassan`, 18);
// hello(`Adeel`, 18)
// hello(`Muneeb`, 18)

// setTimeout(() => console.log(`Hello, World!`), 3000);

const numbers = [43, 71, 12, 75, 87, 41, 57, 73, 56, 87];

const evenNumbers = numbers.filter((e) => {
    return e % 2 === 0 ? true : false;
})

const oddNumbers = numbers.filter((e) => {
    return e % 2 === 1 ? true : false;
})

const squaredNumbers = numbers.map((e) => {
    return Math.pow(e, 2);
})

const total = numbers.reduce((a, e) => {
    return a + e;
})

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(squaredNumbers);
console.log(total);