
const inputField = document.getElementById("inputTemperature");
const cTF = document.getElementById("celsiusToFahrenheit");
const fTC = document.getElementById("fahrenheitToCelsius");
const submitBtn = document.getElementById("submitBtn");
const displayTemp = document.getElementById("displayTemperature");

    submitBtn.onclick = converion

function converion(){
    if(cTF.checked){
       let tempInCel = Number(inputField.value);
       let tempInFah = ((9 / 5) * tempInCel) + 32;
       displayTemp.textContent = `${tempInFah.toFixed(2)}°F`;
    }else if(fTC.checked){
       let tempInFah = Number(inputField.value);
       let tempInCel = ((5 / 9) * (tempInFah - 32));
       displayTemp.textContent = `${tempInCel.toFixed(2)}°C`;
    }else{
       displayTemp.textContent = `Select the unit.`;
    }
}