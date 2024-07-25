// Math => It is a built-in Javascript Object
//         that provides a collection of useful
//         values, properties and methods.

// Value of different constants
console.log(Math.PI) // Value of Pi
console.log(Math.E) //Value of Euler's number 

// Different methods
let floatingPointNumber = 7.5;
let x = 2;
let y = 4;
let radianInDegrees = 30; 
let negativeInteger = -10;
let a = 5;
let b = 15;
let c = -3;


let rounded = Math.round(floatingPointNumber);
let floored = Math.floor(floatingPointNumber);
let ceiled = Math.ceil(floatingPointNumber);
let truncated = Math.trunc(floatingPointNumber);
let power = Math.pow(x, y);
let sqrt = Math.sqrt(y);
let naturalLog = Math.log(y);
let sine = Math.sin(radianInDegrees);
let cosine = Math.cos(radianInDegrees);
let tangent = Math.tan(radianInDegrees);
let absolute = Math.abs(negativeInteger);
let sign = Math.sign(negativeInteger);
let maxVal = Math.max(a, b, c);
let minVal = Math.min(a, b, c);


console.log(`Math.round(${floatingPointNumber}): ${rounded}`);
console.log(`Math.floor(${floatingPointNumber}): ${floored}`);
console.log(`Math.ceil(${floatingPointNumber}): ${ceiled}`);
console.log(`Math.trunc(${floatingPointNumber}): ${truncated}`);
console.log(`Math.pow(${x}, ${y}): ${power}`);
console.log(`Math.sqrt(${y}): ${sqrt}`);
console.log(`Math.log(${y}): ${naturalLog}`);
console.log(`Math.sin(${radianInDegrees}): ${sine}`);
console.log(`Math.cos(${radianInDegrees}): ${cosine}`);
console.log(`Math.tan(${radianInDegrees}): ${tangent}`);
console.log(`Math.abs(${negativeInteger}): ${absolute}`);
console.log(`Math.sign(${negativeInteger}): ${sign}`);
console.log(`Math.max(${a}, ${b}, ${c}): ${maxVal}`);
console.log(`Math.min(${a}, ${b}, ${c}): ${minVal}`);
