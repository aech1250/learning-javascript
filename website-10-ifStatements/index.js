// if statements =>  if a condition is true execute some code
//                   if not, then execute some other code

// if else statements with numbers

// let time = 9;

// if(time < 12){
//     console.log(`Good morning!`); // Output
// }else{
//     console.log(`Good afternoon!`);
// }

// if else statements with booleans

// let isStudent = true

// if(isStudent == true){
//     console.log(`You are a Student`); // Output
// }else{
//     console.log(`You are not a Student`);
// }

// another way

// if(isStudent){ // This is also checking if isStudent is equal to true
//     console.log(`You are a Student`); // Output
// }else{
//     console.log(`You are not a Student`);
// }

// Nested if else Statements

// let age = 25;
// let hasLicense = true;

// if(age >= 16){
//     console.log(`You are old enough to drive`);

//     if(hasLicense){
//         console.log(`You have a license so you can drive`)
//     }else{
//         console.log(`You need a license to drive`)
//     }
// }else{
//     console.log(`You need to be 16+ to drive.`)
// }

// else if statements

// let time = 9;

// if(time < 12){
//     console.log(`Good morning!`); // Output
// }else if(time >= 18){
//     console.log(`Good evening!`);
// }else{
//     console.log(`Good afternoon!`);
// }

// Website 
const input = document.getElementById("myInput");
const display = document.getElementById("display");
const submit = document.getElementById("submitInput");
let age = 0;

    submit.onclick = function(){

        age = Number(input.value);

        if(age >= 100){
            display.textContent =`You're too old to enter this site.`;
         }else if(age >= 18){
            display.textContent =`You're old enough to enter this site.`;
         }else if(age == 0){
            display.textContent =`You can't enter the site, you are just born.`;
         }else if(age < 0){
            display.textContent =`You age can't be zero.`;
         }else{
            display.textContent =`You must be 18+ to enter this site.`;
         }
    }
