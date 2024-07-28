// for loop => do something for a limited amount of time.

// for loop for printing the following pattern
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let starString = "";
    for(let j = 0; j < i; j++){
        starString += "*";
    }
    console.log(starString)
}
