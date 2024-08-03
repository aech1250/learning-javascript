const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
} 

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        setTimeout(() => display.value = "", 3000);
    }
    display.value = result;
}

function clearDisplay(){
    display.value = "";
}