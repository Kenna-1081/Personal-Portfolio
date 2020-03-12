
personAnchor.href = "#"


const maleCharacters = people.filter(person => person.gender === "male")
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === "female")
console.log(femaleCharacters)

const otherCharacters = people.filter(person => person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite")
console.log(otherCharacters)

let maleButton = document.querySelector('#maleButton')
let femaleButton = document.querySelector('#femaleButton')
let otherButton = document.querySelector('#otherButton')
 
maleButton.addEventListener("click", funtion, ( event ) {
    console.log('Thanks for clicking!')
})
 // https://swapi.co/api/films/1/
let url = 'https://swapi.co/api/films/2/'
 
function getLastNumber(url) {
    let end = url.lastIndexOf('/')
}

let counter = 1 

function populateDOM(characters) {
    
}