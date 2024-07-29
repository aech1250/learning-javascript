const userInput = document.getElementById("userInput");
const rollBtn = document.getElementById("rollBtn");
const displayInNumbers = document.getElementById("displayInNumbers");
const displayInImages = document.getElementById("displayInImages");

let dice = [];
let displayInNum = "";
let displayInImg = "";
let numberOfDice = 0;

    rollBtn.onclick = function (){
        if(userInput.value != "" && !isNaN(userInput.value) && userInput.value <= 35  && userInput.value != 0){
            numberOfDice = Number(userInput.value);
            dice = [];
            displayInImg = "";


            for(let i = 0; i < numberOfDice; i++){
                dice.push(Math.floor((Math.random() * 6) + 1));
            }

            displayInNum = dice.join(",");

            displayInNumbers.textContent = `Dice: ${displayInNum}`;
            
            for(let i = 0; i < dice.length; i++){
                displayInImg += `<img src="./images/dice-${dice[i]}.svg"></img>`
            }

            displayInImages.innerHTML = displayInImg;

        }else if(userInput.value == 0){
            displayInNumbers.textContent = `Zero is not a valid input.`
        }else if(userInput.value > 35){
            displayInNumbers.textContent = `Number of dice must be less than 35.`
        }else{
            displayInNumbers.textContent = `Enter the number of dice.`
        }
    }