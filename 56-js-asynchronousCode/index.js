/*
    synchronous => Execute line by line consecutively in a seqencial manner
                   Code that waits for an operation to complete.

    asynchronous => Allows multiple operations to be performed concurrently
                    without waiting
                    Doesn't block the execution flow and allows the program to 
                    continue
                    (I/O handling, network requests, fetching data)

                    Handles with: Callback, Promises and Async/Await.
*/ 

// setTimeout(() => console.log("Task 1"), 3000)


// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
function fun1(callback){
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
}

function fun2(callback){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

fun1(fun2);