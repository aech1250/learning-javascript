const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const countDisplay = document.getElementById("displayCounter");
let count = 0;

    incrementBtn.onclick = function(){
        count++;
        countDisplay.textContent = `${count}`;
    }
    decrementBtn.onclick = function(){
        count--;
        countDisplay.textContent = `${count}`;
    }
    document.getElementById("reset").onclick = function(){
        count = 0;
        countDisplay.textContent = `${count}`;
    }