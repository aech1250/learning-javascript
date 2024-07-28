//Number Guessing Game

const min = 1;
const max = 100;

const randomNumber = Math.floor((Math.random() * max) + min);

let userInput;
let message = "";
let score = 100;
let attempts = 0;

console.log(`Random Numer: ${randomNumber}`);

while(userInput !== randomNumber){
    userInput = parseInt(window.prompt(`Score: ${score}${message} \nGuess the number between ${min} - ${max}: `));
    attempts++;

    if(isNaN(userInput)){
        window.alert(`Please enter a valid number.`)
        continue;
    }
    if(userInput < min || userInput > max){
        window.alert(`Please enter a valid number.`)
        continue;
    }
    if(score === 0){
        window.alert(`You lose.\nScore: ${score}\nNumber was ${randomNumber}.`)

        break;
    }
    if(userInput === randomNumber){
        window.alert(`Congratulation! You won.\nScore: ${score}.\nTook you ${attempts} attempts.`)
        break;
    }
    if(userInput > randomNumber){
        score -= 10;
        message = `\nNumber is less than ${userInput}`
    }
    if(userInput < randomNumber){
        score -= 10;
        message = `\nNumber is greater than ${userInput}`
    }
}