let pokeContainer = document.querySelector('.pokemon')

function  getPokeData(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {
            console.log(pokemonl.results)
            //pokeContainer.textContent = pokemon.name;
        })
    })
}

getPokeData("https://pokeapi.co/api/v2/pokemon/1/")

function populatePokeCards(pokeArray) {
    let pokeCard = document.createElement('div');
    pokeCard.className = 'card';
    let PokeContent = document.createElement('div');
    PokeContent.className = 'content';
    let pokeFront = document.createElement('div');
    pokeFront.className = 'front';
    pokeFront.textContent = "Front";
    let pokeBack = document.createElement('div');
    pokeBack.className = 'back';
    pokeBack.textContent = 'Back!';


    PokeContent.appendChild(pokeFront);
    PokeContent.appendChild(pokeBack);
    pokeCard.appendChild(pokeContent);
    pokeContainer.appendChild()
}