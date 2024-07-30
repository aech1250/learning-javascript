/* 
    callback => a function that is passed as in argument
                to another function
                used to handle asynchronous operatons
                1. Reading a file
                2. Network requests
                3. Interacting with database

                Analogy: after executing a function do
                         the callback function.
*/

// function hello(callback){
//     console.log(`Hello!`);
//     callback();
// }

// function wait(){
//     console.log(`Wait.`);
// }

// function leave(){
//     console.log(`Leave.`);
// }

// function goodbye(){
//     console.log(`GoodBye!`);
// }

// hello(wait);

sum(displayDOM, 1, 2);

function displayConsole(result){
    console.log(result);
}
function displayDOM(result){
    document.getElementById("myH1").textContent = result;
}

function sum(callback, x, y){
    let result = x+y;
    callback(result)
}
