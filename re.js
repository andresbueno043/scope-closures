//var - se puede reasignar y redeclarar
var firstName; //undefined
firstName = 'Andres'
console.log(firstName);

var lastName = 'Juan';
lastName = 'Ana';
console.log(lastName);

var secondName = 'David';
var secondName = 'Ana';
console.log(secondName);

// let - se puede reasignar, pero no redeclarar

let fruit = 'Apple';
fruit = 'Kiwi';

//const - no se puede reasignar ni redeclarar
const animal = 'dog';
// animal = 'cat';
console.log('animal');