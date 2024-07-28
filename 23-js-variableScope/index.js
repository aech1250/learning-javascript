// Variable Scope => Either Local or Gobal

// Local scope means it's accessible within a block of code
// Gobal scope means it's accessible to everyone in the entire code base

//---------------Local Scope-----------------
f1();
f2();
function f1(){
    let x = 1;
    console.log(x)
}
function f2(){
    let x = 2;
    console.log(x)
}
//---------------Global Scope-----------------
let y = 2;
function a1(){
    console.log(y)
}
function a2(){
    console.log(y)
}
a1();
a2();