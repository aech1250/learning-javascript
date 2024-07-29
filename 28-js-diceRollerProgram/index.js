const userInput = document.getElementById("userInput");
const rollBtn = document.getElementById("rollBtn");
const displayInNumbers = document.getElementById("displayInNumbers");
const displayInImages = document.getElementById("displayInImages");



    rollBtn.onclick = function (){
        if(userInput.value != "" && !isNaN(userInput.value) && userInput.value <= 35  && userInput.value != 0){
            let displayInNum = [];
            let displayInImg = [];
            let numberOfDice = Number(userInput.value);
            let randomNumber = 0;
            
            for(let i = 0; i < numberOfDice; i++){
                randomNumber = Math.floor((Math.random() * 6) + 1);    
                displayInNum.push(randomNumber);
                displayInImg.push(`<img src="./images/dice-${randomNumber}.svg"></img>`);
            }

            displayInNumbers.textContent = `Dice: ${displayInNum.join(", ")}.`;
            displayInImages.innerHTML = displayInImg;

        }else if(userInput.value == 0){
            displayInNumbers.textContent = `Zero is not a valid input.`
        }else if(userInput.value > 35){
            displayInNumbers.textContent = `Number of dice must be less than 35.`
        }else{
            displayInNumbers.textContent = `Enter the number of dice.`
        }
    }