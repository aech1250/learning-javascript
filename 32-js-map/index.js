/*
    map() => accepts a callback and applies that function
             to each element of an array, then return
             a new array.
*/

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// function square(e){
//     return e = e ** 2;
// }
// function cube(e){
//     return e = e ** 3;
// }

// console.log(`Numbers : ${numbers}`);
// console.log(`Squares : ${squares}`);
// console.log(`Cubes : ${cubes}`);

// const friends = ["Adeel", "Muneeb", "Arshad", "Sammed", "Wali"];

// function fuckFriends(element){
//     return "Fuck"+" "+element;
// }

// console.log(friends.map(fuckFriends))

const dates = ["2022-23-2", "2024-7-6", "2004-17-9"];

function formateDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

console.log(dates.map(formateDate));