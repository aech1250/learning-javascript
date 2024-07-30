/*  
    filter() => creates a new array by filtering out elements
*/

// const numbers = [1, 2, 3, 4, 5, 6];

// function isEven(e){
//     return e % 2 === 0 ? true : false;
// }
// function isOdd(e){
//     return e % 2 === 1 ? true : false;
// }

// console.log(`Even Number: ${numbers.filter(isEven)}`);
// console.log(`Odd Number: ${numbers.filter(isOdd)}`);

// let ages = [43, 71, 12, 75, 87, 41, 57, 73, 56, 87];

// function isAdult(e){
//     return e >= 18 ? true : false;
// }

// console.log(ages.filter(isAdult))

let words = ["apple", "balloon", "cat", "dolphin", "elephant", "flower", "guitar",
             "helicopter", "ice", "jungle", "kangaroo", "lemon", "mountain", "notebook",
             "ocean", "piano", "queen", "rainbow", "sunshine", "tiger", "umbrella",
             "volcano", "waterfall", "xylophone", "yacht", "zebra"];

function isShortWord(e){
    return e.length <= 6 ? true : false;
}
function isLongWord(e){
    return e.length > 6 ? true : false;
}

console.log(words.filter(isShortWord));
console.log(words.filter(isLongWord));