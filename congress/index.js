
import {senators} from '../data/senators.js';
//console.log(senators);

let congressContainer = document.querySelector('.congressContainer')

const filterSenators = (prop, value) => {
    return senators[0].results[0].members.filter(senator => senator[prop] === value);
}

const DEMOCRAT_COLOR = 'blue';
const REPUBLICAN_COLOR = 'red';
const republicans = filterSenators('party', 'R');

const democrats = filterSenators('party', 'D');

const mostSeniority = simplefiedSenators(republicans).reduce(
    (acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator;
}
)

function enableCardToFlip() {
  var card = document.querySelector('.card');
  card.addEventListener( 'click', function() {
    flipTheCard(card);
    clearOutCongressContainer();
    displayPartyImagesBasedOnParty();
  });
}

function displayPartyImagesBasedOnParty() {
  let party = document.querySelector('.no-display');
  if (party.textContent == "republicans") {
    changeTheBackgroundColor(REPUBLICAN_COLOR);  
    populateContainer(simplefiedSenators(republicans))
    setHiddenPartyVariableToNextParty(party, 'democrats');
  //  party.textContent = "democrats"
  } else {
    changeTheBackgroundColor(DEMOCRAT_COLOR);
    populateContainer(simplefiedSenators(democrats))
    party.textContent = "republicans"
  }
}

function changeTheBackgroundColor(color) {
    document.querySelector("#congressBody").setAttribute("class", color);
} 

function clearOutCongressContainer() {
    congressContainer.innerHTML = ' ';
}

function flipTheCard(card) {
    card.classList.toggle('is-flipped');
}

function setHiddenPartyVariableToNextParty(party, value) {
   party.textContent = "democrats";
}

function simplefiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name}` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            twitterAccount: senator.twitter_account,
            state: senator.state,
        }
    })
}

function populateContainer(smallSenatorsArray) {
    smallSenatorsArray.forEach(senator => {

        let senFigure = document.createElement('figure');
        let figImg = document.createElement('img');
        let figCaption = document.createElement('figcaption');
        figImg.src = senator.imgURL;
        figCaption.textContent = senator.name + " (" + senator.state  + ")";

        senFigure.appendChild(figImg);
        senFigure.appendChild(figCaption);
        congressContainer.appendChild(senFigure);
    })
}


//console.log(mostSeniority)


populateContainer(simplefiedSenators(democrats));
enableCardToFlip();

