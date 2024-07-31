/* 
    function decleration => defines a reusable block of
                            code tha perform a certain
                            task 

    Used IN or AS:
    1. Higher order function.
    2. Callback
    3. Event Listener
    4. Closure
 */


// function hello(){
//     console.log(`Hello`);
// }

// hello();

/*                           
    function expression => a way to define functions as
                           as values of variables

*/

const hello = function(){
    console.log(`Hello1`);
}


setTimeout(function(){
    console.log(`Hello2`);
}, 3000);
setTimeout(hello, 3000)