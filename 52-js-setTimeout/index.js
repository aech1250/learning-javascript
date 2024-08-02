/*
    setTimeout() => function in JavaScript that allows you to schedule
                    the execution of a funciton after a certain 
                    amount of time (in milliseconds)

                    Times are approximates (based on the workload of js runtime enviroment)

                    setTimeout(callback, delay);
                    clearTimeout(timeoutId) => to clear the timout function.
*/ 

// const timeoutId = setTimeout(() => {
//     console.log(`Hello, Hassan!`)
// }, 5000);

// clearInterval(timeoutId);

const display = document.getElementById("display");
const clickBtn = document.getElementById("myClick");
const undoClickBtn = document.getElementById("myUndoClick");

let timeoutId;

clickBtn.onclick = () => {  
    console.log("Timeout Started...")  
    timeoutId = setTimeout(() => {
        display.textContent = `Hello, World!`;
    }, 5000);
}

undoClickBtn.onclick = () => {
    clearTimeout(timeoutId);
    console.log("Timeout Cleared...")
}
