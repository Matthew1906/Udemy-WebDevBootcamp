// 1. alert("message"); -> javascript function

alert('hello');
alert('world');
window.alert('bye');

// convention -> double quotes for string
// idiomatic.js -> living docs of convention in javascript

// 2. Data types -> classifying data

var age = 19
var name = 'Matthew'

// typeof() -> str

alert('My name is '+ name + '(' + typeof(name) + ')')

// Variables

// get input 
var name = prompt('What is your name?');

// Naming conventions
// variable names are for everyone, not just you 
// always use meaningful names
// camelcase seems to be the norm?
// don't use space
// don't start with numbers
// only use alphabets, number, underscore, $


// string concatetenation (I've done that before)
alert('Hello ' + name)

// string length
alert(name.length)

// string slice 
// -> indexing starts from 0 
// (start, stop)
alert(name.slice(0,4))

// string uppercase
alert(name.toUpperCase())

// numbers: arithmetic and intro to modulo
// precedence also works btw

// increment and decrement operator
// post and pre in/de crement EXISTS in javascript

var age = 10;
var plusAge = ++age;


// functions -> packaging a block of code


function getMilk(){
    alert('start of getMilk()');
    alert('Get out of the house');
    alert('Buy Milk');
    alert('End of getMilk()');
} 

getMilk()