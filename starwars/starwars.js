

// get all characters to apear either with a button or when you open the page
import {people} from '../data/people.js';

import {starships} from '../data/starships.js';


const starShips = starships;

const maleCharacters = people.filter(person => person.gender === "male");
 
const femaleCharacters = people.filter(person => person.gender === "female");

const otherCharacters = people.filter(person => person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite");

let maleButton = document.querySelector('#maleButton');
let femaleButton = document.querySelector('#femaleButton');
let otherButton = document.querySelector('#otherButton');
let starShipsButton = document.querySelector('#starShipsButton');

maleButton.addEventListener("click", function ( event ) {
    document.querySelector("#displayCharacters").innerHTML = '';
    maleCharacters.forEach(addToDisplay);
})

femaleButton.addEventListener("click", function ( event ) {
    document.querySelector("#displayCharacters").innerHTML = '';
    femaleCharacters.forEach(addToDisplay);
})

otherButton.addEventListener("click", function ( event ) {
    document.querySelector("#displayCharacters").innerHTML = '';
    otherCharacters.forEach(addToDisplay);
})

starShipsButton.addEventListener("click", function ( event ) {
    document.querySelector("#displayCharacters").innerHTML = '';
    starShips.forEach(addToShipDisplay);    
});

function addToShipDisplay(ship, index) {
    var shipNumber = getShipNumber(ship.url);
    document.querySelector("#displayCharacters").innerHTML += '<img class="shipPics" src="https://starwars-visualguide.com/assets/img/starships/' + shipNumber + '.jpg" alt="">';
}

function addToDisplay(person, index) {
    var personNumber = getPersonNumber(person.url);
    document.querySelector("#displayCharacters").innerHTML += '<table class="table" width="80%"><tr>' + 
    addImageToTable(person, personNumber) + 
    addPersonInformationToTable(person, personNumber) + 
    addStarshipInformationToTable(person, personNumber) + '</tr></table>';
    console.log(document.querySelector("#displayCharacters").innerHTML);
}
function addImageToTable(person, personNumber) {
   var returnString = '<td>' + 
   '<img class="characterPic" src="https://starwars-visualguide.com/assets/img/characters/' + personNumber + '.jpg" alt="' + person.name + '"></td>';
    return returnString;
}

function addPersonInformationToTable(person, personNumber) {
    return '<td class="info"><h2>' + person.name +
    "</h2><br><br>Height: " + person.height + 
    "<br><br>Hair color: " + person.hair_color + 
    "<br><br>Skin Color: " + person.skin_color + 
    "<br><br>Eye Color: " + person.eye_color + 
    "<br><br>Starships: -->" + '</td>';
}
  
function addStarshipInformationToTable(person, personNumber) {
    var returnHTML = '<td><table>';
    for (var i = 0; i < person.starships.length; i++){
        var shipNumber = getShipNumber(person.starships[i]);
        returnHTML += '<tr>';
        //returnHTML += '<td><h3 class="shipName">' + getStarshipName(shipNumber) + '</h3></td>';
        returnHTML += '<td><img class="shipPics" src="https://starwars-visualguide.com/assets/img/starships/' + shipNumber + '.jpg" alt=""><td></tr>';
        //returnHTML += '<td><img class="shipPics" src="https://starwars-visualguide.com/assets/img/starships/' + shipNumber + '.jpg" alt="This is not the image you are looking for"><td></tr>';
    } 
    returnHTML += '</table></td>';
    return returnHTML;
 }  

function getStarshipName(shipNumber) {
    for (var i = 0; i < starShips.length; i++) {
        var starshipNumber = getShipNumber(starShips[i].url);
        if (starshipNumber == shipNumber) {
            return starShips[i].name;
        }
    }
    return "No starships";   
}

function getPersonNumber(personUrl) {
    personUrl = personUrl.substr(0, personUrl.length - 1);
    let pos = personUrl.lastIndexOf("/"); 27
    return personUrl.substr(pos + 1, 10);
}
function getShipNumber(shipUrl) {
    shipUrl = shipUrl.substr(0, shipUrl.length - 1);
    let pos = shipUrl.lastIndexOf("/"); 27
    return shipUrl.substr(pos + 1, 10);
}

