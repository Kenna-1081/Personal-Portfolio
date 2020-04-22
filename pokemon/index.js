let pokeContainer = document.querySelector('.pokemon')

DButton.addEventListener("click", function ( event ) {
    document.querySelector("#congressmen").innerHTML = '';
    DCharacters.forEach(addToDisplay);
})

function  getPokeData(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {
            console.log(pokemonl.results)
            populatePokeCards(pokemon.results);
            //pokeContainer.textContent = pokemon.name;
        })
    })
}

//getPokeData("https://pokeapi.co/api/v2/pokemon/1/")

async function getAPIData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

getAPIData('https://pokeapi.co/api/vs/pokemon/?&limit=25').then(
    (data) => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url).then(
            (pokeData) => {
                console.log(pokeData)
                }
            )  
        }
    }
)

function populatePokeCards(pokeArray) {
    let pokeCard = document.createElement('div');
    pokeScene.className = 'scene';
    let pokeCard = document.createElement('div');
    PokeCard.className = 'card';
    pokeCard.addEventListener( 'click', function(){
        pokeCard.classList.toggle('is-flipped');    
    })
    
    let pokeFront = document.createElement('div');
    pokeFront.className = 'frontcard__face card__face--front';
    pokeFront.textContent = "Front";
    let pokeBack = document.createElement('div');
    pokeBack.className = 'back';
    pokeBack.textContent = 'Back!';

    console.log('testing');
    PokeContent.appendChild(pokeFront);
    PokeContent.appendChild(pokeBack);
    pokeScene.appendChild(pokeCard);
    pokeContainer.appendChild(pokeScene);
}

/*<div class="scene">
  <div class="card">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back"><div><p>Hi,I'm here on the back</p></div></div>
  </div>
</div>
<p>Click card to flip.</p>*/ 