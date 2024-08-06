const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "088414da65d8840efab6031672356711";

weatherForm.addEventListener("submit" || "enter", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);

            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Enter a city.");
    }
});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Couldn't fetch the data.")
    }

    return await response.json();
}

function displayWeatherInfo(data){

    card.innerHTML = "";

    const {name:city, 
           main:{temp, humidity}, 
           weather:[{description, id}]} = data;

    card.style.display = "flex";
    
    const displayCity = document.createElement("p");
    const tempInCel = temp - 273.15;
    const displayTemp = document.createElement("p");
    const displayHumidity = document.createElement("p");
    const displayDescription = document.createElement("p");
    const displayEmoji = document.createElement("p");
    
    displayCity.textContent = city;
    displayTemp.textContent = `${tempInCel.toFixed(1)}°C`;
    displayHumidity.textContent = `Humidity: ${humidity}%`;
    displayDescription.textContent = `${description}`;
    displayEmoji.textContent = getWeatherEmoji(id);
    
    displayCity.classList.add("cityDisplay");
    displayTemp.classList.add("tempDisplay");
    displayHumidity.classList.add("humidityDisplay");
    displayDescription.classList.add("descDisplay");
    displayEmoji.classList.add("weatherEmoji");
    
    card.appendChild(displayCity);
    card.appendChild(displayTemp);
    card.appendChild(displayHumidity);
    card.appendChild(displayDescription);
    card.appendChild(displayEmoji);

}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return '⛈'
            break;
        case (weatherId >= 300 && weatherId < 400):
            return '🌧'
            break;
        case (weatherId >= 500 && weatherId < 600):
            return '🌧'
            break;
        case (weatherId >= 600 && weatherId < 700):
            return '❄️'
            break;
        case (weatherId >= 700 && weatherId < 800):
            return '🌫'
            break;
        case (weatherId === 800):
            return '☀️'
            break;
        case (weatherId >= 800 && weatherId < 810):
            return '☁️'
            break;
        default:
            return '❓';
            break;
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");

    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}