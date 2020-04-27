
import { senators } from '../data/senators.js';

let congressContainer = document.querySelector('.congressContainer')

function getCongressData(url) {
    fetch("../data/senators.js").then(function(response) {
    response.json().then(function(senator) {
        congressContainer.textContent = senator.name;
    });
  });
}

getCongressData("/data.senators.js")





const container = document.querySelector('.container');

const filterSenators = (prop, value) => {
    return senators.filter(senatro => senator[prop] === value);
}

function simplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name}` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middlename}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            twitterAccount: senator.twitter_account,
        }
    })
}

function populateContainer(smallSenatorsArray) {
    console.log(smallSenatorsArray)
    smallSenatorsArray.forEach(senator => {

        let senFigure = document.createElement('figure');
        let figImg = document.createElement('img');
        let figCaption = document.createElement('figcaption')

        fitImg.src = senator.imgURL;
        figCaption.textContent = senator.name;

        senFigure.appendChild(figImg);
        senFigure.appendChild(figCaption);
        container.appendChild(senFigure);
    })
}

const republicans = filterSenators('party', 'R');
const democrats = filterSenators('party', 'D');

const mostSeniority = simplefiedSenators(republicans).reduce(
    (acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator;
}
)

const twitter = simplifiedSenators(democrates).reduce((acc, senator) => acc.twitterAccount)

console.log(mostSeniority)


populateContainer(mappedSenators);