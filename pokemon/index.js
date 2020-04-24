let pokeContainer = document.querySelector('#pokemon');

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

function  getPokeData(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {
            console.log(pokemon.results)
        })
    })
}



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

function displayCards(howmany) {
  getAPIData('https://pokeapi.co/api/v2/pokemon/?limit='+howmany).then(
    (data) => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url).then(
            (pokeData) => {
                populatePokeCards(pokeData);
                }
            )  
        }
    }
  );
}

function clearExistingCards() {
    pokeContainer.innerHTML = '';
}

function displayNewNumberOfCards() {
    clearExistingCards();
    let counter = document.querySelector('#counter');
    let howMany = parseInt(counter.textContent)+1;
    displayCards(howMany);
    counter.textContent = howMany;

}

displayCards(25);

let addCard = document.querySelector('#addCard');
addCard.addEventListener("click", function ( event ) {
    displayNewNumberOfCards();
})


function populatePokeCards(pokeCardData) {
    console.log(pokeCardData.id, pokeCardData.name);
    let pokeScene = document.createElement('div');
    pokeScene.className = 'scene';
    let pokeCard = document.createElement('div');
    pokeCard.className = 'card';
    pokeCard.addEventListener( 'click', function(){
        pokeCard.classList.toggle('is-flipped'); 
    })   
    let pokeFront = document.createElement('div');
    pokeFront.className = 'card__face card__face--front';
    let img = document.createElement('img');
    img.className = 'picture';
    let imgSrc = 'https://pokeres.bastionbot.org/images/pokemon/' + pokeCardData.id + '.png';
    img.setAttribute('src', imgSrc);
    let nameSpan = document.createElement('span');
    nameSpan.textContent = pokeCardData.name;
    pokeFront.appendChild(img);
    pokeFront.appendChild(nameSpan);
    let pokeBack = document.createElement('div');
    pokeBack.className = 'card__face card__face--back';
    pokeBack.innerHTML = getDataForBack(pokeCardData);

    pokeCard.appendChild(pokeFront);
    pokeCard.appendChild(pokeBack);
    pokeScene.appendChild(pokeCard);
    pokeContainer.appendChild(pokeScene);
}

function getDataForBack(pokeCardData) {
    let information = '<div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/' + pokeCardData.id + '.png"><p>' + pokeCardData.name + '\'s abilities:</p>';
    for (var i=0; i < pokeCardData.abilities.length; i++) {
        information += '<p>' + pokeCardData.abilities[i].ability.name +  '</p>';
    }
    
    information += '</div>';
    return information;
}

