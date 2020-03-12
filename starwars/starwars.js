

import {people} from '../data/people.js';

import {starships} from '../data/starships.js';
const starShips = starships;

const maleCharacters = people.filter(person => person.gender === "male")
//console.log(maleCharacters);

const femaleCharacters = people.filter(person => person.gender === "female")
//console.log(femaleCharacters);

const otherCharacters = people.filter(person => person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite")
//console.log(otherCharacters);

let maleButton = document.querySelector('#maleButton')
let femaleButton = document.querySelector('#femaleButton')
let otherButton = document.querySelector('#otherButton')
 
maleButton.addEventListener("click", function ( event ) {
    document.querySelector("#displayCharacters").innerHTML = '';
    maleCharacters.forEach(addToDisplay);
    console.log(document.querySelector('#displayCharacters').innerHTML);
});

femaleButton.addEventListener("click", function ( event ) {
    document.querySelector("#displayCharacters").innerHTML = '';
    femaleCharacters.forEach(addToDisplay);
    console.log(document.querySelector('#displayCharacters').innerHTML);
});

otherButton.addEventListener("click", function ( event ) {
    document.querySelector("#displayCharacters").innerHTML = '';
    otherCharacters.forEach(addToDisplay);
    console.log(document.querySelector('#displayCharacters').innerHTML);
});

function addToDisplay(person, index) {
    var personNumber = getPersonNumber(person.url);
    //document.querySelector("#displayCharacters").innerHTML += '<div class="table">';
    document.querySelector("#displayCharacters").innerHTML += '<table class="table" width="80%"><tr>' + 
    addImageToTable(person, personNumber) + 
    addPersonInformationToTable(person, personNumber) + 
    addStarshipInformationToTable(person, personNumber) + '</tr></table>';
    console.log(document.querySelector("#displayCharacters").innerHTML);
}
function addImageToTable(person, personNumber) {
   var returnString = '<td>' + 
   '<img src="https://starwars-visualguide.com/assets/img/characters/' + personNumber + '.jpg" alt="' + person.name + '"></td>';
    return returnString;
}

function addPersonInformationToTable(person, personNumber) {
    return '<td><h2>' + person.name +
    "</h2><br><br>Height: " + person.height + 
    "<br><br>Hair color: " + person.hair_color + 
    "<br><br>Skin Color: " + person.skin_color + 
    "<br><br>Eye Color: " + person.eye_color + '</td>';
}
  
function addStarshipInformationToTable(person, personNumber) {
    return '<td>Starships</td>';
}


function getPersonNumber(personUrl) {
    personUrl = personUrl.substr(0, personUrl.length - 1);
    let pos = personUrl.lastIndexOf("/"); 27
    return personUrl.substr(pos + 1, 10);
}
 
