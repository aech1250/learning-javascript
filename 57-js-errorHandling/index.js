/*
    Error => An object that is created to represent a problem
             that occurs
             Occur often when user input or establishing a connection

             Netork Errors
             Promise Rejection
             Security Errors

    try{}       =>   Enclose code that might potentially cause error.
    catch{}     =>   Catch and handle any thrown error from try{}.
    finally{}   =>   (Optional) Always execute. Used mostly for clean up
                     ex. close files, close connection, release resources.

*/

// try{
//     console.log(x);
//     // Netork Errors
//     // Promise Rejection
//     // Security Errors

// }catch(error){
//     console.error(error);

// }finally{
//     // Close File
//     // Close Connection
//     // Release Resources

//     console.log("This will always execute.")
// }

// console.log(`This is the end of the file.`);

try{
    const dividend = Number(window.prompt("Enter value of dividened:"));
    const divisor = Number(window.prompt("Enter value of divisor:"));

    if(divisor == 0){
        throw new Error("You can't divide by zero.");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Input must be in numbers.")
    }

    const result = dividend / divisor;

    console.log(result)
}
catch(error){
    console.log(error);
}

console.log("This is the end.")