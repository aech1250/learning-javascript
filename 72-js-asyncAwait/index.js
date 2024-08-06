/*
    Async/Await => Async => makes a function return a promise.
                   Await => makes a async function wait for a promise.

                   Allows you to write asynchornous code in a synchronous
                   manner.
                   Async doesn't have resolve or reject parameters.
                   Everything after Await is places in an event queue.

*/ 

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let walkDog = true;

            if (walkDog) {
                resolve("You walked the dog.");
            } else {
                reject("You didn't walk the dog.")
            }

        }, 1500);
    });

}
function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let cleanKitchen = true;

            if (cleanKitchen) {
                resolve("You cleaned the kitchen.");
            } else {
                reject("You didn't clean the kitchen.")
            }

        }, 2500);
    });
}
function trashOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let trashOut = true;

            if (trashOut) {
                resolve("You took out trash.");
            } else {
                reject("You didn't take the trash out.")
            }

        }, 500);
    });
}

async function doChores() {

    try{ 
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const trashOutResult = await trashOut();
        console.log(trashOutResult);

        console.log("You finished all the chores.");
        
    }catch(error){
        console.error(error);
    }
}

doChores();