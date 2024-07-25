// Random number generator

const roll = document.getElementById("rollButton");
const dice1 = document.getElementById("myDice1");
const dice2 = document.getElementById("myDice2");
const dice3 = document.getElementById("myDice3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

    roll.onclick = function(){
        randomNumber1 = Math.floor(Math.random() * max) + min; 
        randomNumber2 = Math.floor(Math.random() * max) + min; 
        randomNumber3 = Math.floor(Math.random() * max) + min;
        
        dice1.textContent = randomNumber1;
        dice2.textContent = randomNumber2;
        dice3.textContent = randomNumber3;
    }

