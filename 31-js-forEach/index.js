/* 
    forEach() => method used to iterate over the es
                 of an arr and apply a specified function
                 (callback) to each e.

                 arr.forEach(callback);
*/

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(e, i, arr){
//     arr[i] = e * 2;
// }
// function triple(e, i, arr){
//     arr[i] = e * 2;
// }
// function square(e, i, arr){
//     arr[i] = e ** 2;
// }
// function cube(e, i, arr){
//     arr[i] = e ** 3;
// }

let fruits = ["apple", "orange", "banana", "mango"];

fruits.forEach(addNumbering);
fruits.forEach(makeUpperCase);
fruits.forEach(makeLowerCase);
fruits.forEach(display);

function addNumbering(e, i, arr){
    arr[i] = `${i + 1}. ` + e.charAt(0).toUpperCase() + e.slice(1);
}

function makeLowerCase(e, i, arr){
    arr[i] = e.toLowerCase();
}
function makeUpperCase(e, i, arr){
    arr[i] = e.toUpperCase();
}

function display(e){
    console.log(e);
}