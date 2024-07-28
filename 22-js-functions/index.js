// function => a section of program that can you used
//             again and again as per use.

function add(x, y){
    return x + y
}
function subtract(x, y){
    return x - y
}
function multiply(x, y){
    return x * y
}
function divide(x, y){
    return x / y
}
function mod(x, y){
    return x % y
}
function isEven(x){
    return x % 2 === 0 ? true : false;
}
function isOdd(isEven){
    return !isEven ? true: false;
}

console.log(`add(2, 2): ${add(2, 2)}`)
console.log(`subtract(2, 2): ${subtract(2, 2)}`)
console.log(`multiply(2, 2): ${multiply(2, 2)}`)
console.log(`divide(2, 2): ${divide(2, 2)}`)
console.log(`mod(1, 2): ${mod(1, 2)}`)
console.log(`isEven(2, 2): ${isEven(2, 2)}`)
console.log(`isOdd(isEven(3)): ${isOdd(isEven(3))}`)