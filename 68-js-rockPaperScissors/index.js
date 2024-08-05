
class Player{
    score = 0;

    increment(){
        this.score++;
    }
    decrement(){
        this.score--;
    }
}

const choices = ['rock', 'paper', 'scissor'];
const playerChoiceDisplay = document.getElementById("player-move");
const computerChoiceDisplay = document.getElementById("computer-move");
const resultDisplay = document.getElementById("display-result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const humanPlayer = new Player();
const computerPlayer = new Player();

function playGame(choice){
    const random = Math.floor((Math.random() * 3) + 1);
    const computerChoice = choices[random - 1];

    if (   (choice === 'rock' && computerChoice === 'rock') 
        || (choice === 'paper' && computerChoice === 'paper') 
        || (choice === 'scissor' && computerChoice === 'scissor') ) {
        playerChoiceDisplay.textContent = `Player: ${choice}`;
        computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = `Its a tie`;
        resultDisplay.style.visibility = "visible";
        resultDisplay.style.color = "rgb(165, 165, 165)";
    }
    if (   (choice === 'rock' && computerChoice === 'scissor')
        || (choice === 'scissor' && computerChoice === 'paper')
        || (choice === 'paper' && computerChoice === 'rock')) {
        playerChoiceDisplay.textContent = `Player: ${choice}`;
        computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = `You won`;
        resultDisplay.style.visibility = "visible";
        resultDisplay.style.color = "rgb(65, 255, 65)";
        humanPlayer.increment();
        playerScoreDisplay.textContent = humanPlayer.score;
        computerScoreDisplay.textContent = computerPlayer.score;
    }
    if (   (choice === 'rock' && computerChoice === 'paper')
        || (choice === 'scissor' && computerChoice === 'rock')
        || (choice === 'paper' && computerChoice === 'scissor')) {
        playerChoiceDisplay.textContent = `Player: ${choice}`;
        computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = `You lose`;
        resultDisplay.style.visibility = "visible";
        resultDisplay.style.color = "rgb(255, 46, 46)";
        computerPlayer.increment();
        playerScoreDisplay.textContent = humanPlayer.score;
        computerScoreDisplay.textContent = computerPlayer.score;
    }
}
