/*
    closures => a function defined inside another function
                the inner function has access to the variables
                and the scope of the outer function
                Allow for private variables and state maintenance
                Used frequently in JS Frameworks: React, Vue and Angular

*/
/*------------------------------------------------------------------------------------*/
// function outer(){

//     let message = "FYA";
//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();
/*------------------------------------------------------------------------------------*/
// function increament(){
//     let count = 0;
//     count++;
//     console.log(`Count: ${count}`);
// }

// increament();
// increament();
/*------------------------------------------------------------------------------------*/
// function createCounter(){
//     let count = 0;

//     function increament(){
//         count++;
//         console.log(`Count: ${count}`);
//     }
//     function getCount(){
//         return count;
//     }

//     return {increament, getCount};
// }

// const Counter = new createCounter();

// Counter.increament();
// Counter.increament();
// Counter.increament();
// Counter.increament();
// Counter.increament();
// Counter.increament();

// console.log(Counter.getCount());
/*------------------------------------------------------------------------------------*/ 
function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game1 = new createGame();

game1.increaseScore(2);
game1.increaseScore(2);
game1.increaseScore(2);
game1.decreaseScore(3);

game1.score = 100000000; // nothing happen cuz there is no score in sb object so it just create a new score varible and nothing happens to other score variable

console.log(`Final Score: ${game1.getScore()}`);

