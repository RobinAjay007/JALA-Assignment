// This is a single line comment

/*
   This is a multiline comment
   that spans multiple lines.
*/

// Create an array of fruit names
let fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

// Function to sort fruits array in descending order
const sortDescending = () => {
    fruits.sort((a, b) => b.localeCompare(a));
    console.log(fruits);
};

// Write a program with FOR/IN loop
for (let i in fruits) {
    console.log(fruits[i]);
}

// Create an object "person" with properties firstname and lastname
let person = {
    firstname: 'John',
    lastname: 'Doe'
};

// Display properties using dot notation
console.log(person.firstname);
console.log(person.lastname);

// Display properties using bracket notation
console.log(person['firstname']);
console.log(person['lastname']);

// Variable hoisting example
console.log(hoistedVar); // Output: undefined
var hoistedVar = 'Variable hoisting example';

// Using strict mode to catch undeclared variables
'use strict';
console.log(nonDeclaredVar); // Throws ReferenceError: nonDeclaredVar is not defined
