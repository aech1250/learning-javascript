/*
    rest parameter => (...rest) allows a function
                      to work with a variable number
                      of arguments by bundling them
                      into an array.

                      Does the opposite of spread
                      operators

*/

// function openFridge(...foods){
//     console.log(foods);
// }
// function getFoods(...foods){
//     return foods;
// }

// const food1 = "milk";
// const food2 = "eggs";
// const food3 = "bread";
// const food4 = "cereal";
// const food5 = "juice";

// openFridge(food1, food2, food3, food4, food5);

// let myfood = getFoods(food1, food2, food3, food4, food5);

// console.log(myfood);

// function calTotal(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function calAverage(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length ;
// }

// let totalAmount = calTotal(1, 2, 3);
// let averageAmount = calAverage(1, 2, 3);

// console.log(`You total amount is $${totalAmount}`)
// console.log(`You average amount you spent is $${averageAmount}`)

let fullName = combimeString("Mr.", "Hassan", "Amir", "I")

function combimeString(...strings){
    // let result = "";
    // for(let string of strings){
    //     result = result + string + " "; 
    // }
    // return result.trim();

    return strings.join(" ");
}

console.log(fullName);