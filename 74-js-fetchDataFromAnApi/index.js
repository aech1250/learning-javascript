/*
    fetch => Function used to make HTTP requests to fetch resources.
             (JSON style data, images, files)
             Simplifies asynchronous data fetching in JavaScript and
             for interacting with APIs to retrive and send data
             asynchronously over the web.

             fetch(url, {options})

*/ 


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
    
//         if(!response.ok){
//             throw new Error("Could not fetch.");
//         }else{
//             return response.json()
//         }
//     })
//     .then(values => console.log(values))
//     .catch(error => console.error(error));


async function getData() {
    
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Couldn't fetch data.")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";


    }
    catch(error){
        console.log(error);
    }
}
