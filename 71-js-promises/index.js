/*
    Promises => An Object that manages asynchronous operations
                Wrap a promise object around {asynchronous code}
                "I promise to return the value"
                PENDING -> RESOLVED or REJECTED
                new Promise((resolve, reject) => {asynchronous code});

    Do these chores in order
    1. Walk the dog.
    2. Clean the kitchen.
    3. Take out the trash.

*/

// function walkDog(){
//     setTimeout(() => {
//         console.log("You walked the dog.")
//         ();
//     }, 1500)
// }
// function cleanKitchen(){
//     setTimeout(() => {
//         console.log("You cleaned the kitech.")
//         ();
//     }, 2500)
// }
// function trashOut(){
//     setTimeout(() => {
//         console.log("You took out trash.")
//         ();
//     }, 500)
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         trashOut(() => {
//             console.log("You completed all tasks.")
//         })
//     })
// })


function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let walkDog = true;

            if(walkDog){
                resolve("You walked the dog.");
            }else{
                reject("You didn't walk the dog.")
            }

        }, 1500);
    });
    
}
function cleanKitchen(){
    
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
function trashOut(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {

        let trashOut = false;

        if (trashOut) {
            resolve("You took out trash.");
        } else {
            reject("You didn't take the trash out.")
        }
        
    }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return trashOut()})
         .then(value => {console.log(value); return "All tasks completed."})
         .then(value => console.log(value))
         .catch(error => console.error(error));
