// named functions 
function handleClick(){
    alert("I got clicked");
}

// event listener -> addEventListener(event(in string), javascript function (without ()))
// document.querySelector("button").addEventListener('click', handleClick);
// parentheses -> call the function
// without parentheses we just add the function, since the function is an object

// listener with anonymous functions
// no need to confuse parentheses and all that
// document.querySelector("button").addEventListener('click', function(){
//     alert('I got clicked')
// });

// Challenge 1: adding event listeners to all buttons

// Use foreach -> similar to map in Python
// document.querySelectorAll('.drum').forEach(function(btn){
//     btn.addEventListener('click', function(){
//         alert('I got clicked!');
//     });
// });

// use for loop
// for(var i = 0;i<document.querySelectorAll('.drum').length;++i){
//     document.querySelectorAll('.drum')[i].addEventListener('click', function(){
//         alert('I got clicked!');
//     })
// }

// Higher order functions

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculate(func, num1, num2){
    // Higher-order functions: pass other functions to the function    
    return func(num1, num2);
}

// play sounds in Website
// use new Audio(url)
// audio.play()

// create objects 
// similar to python dictionaries
// var housekeeper1 = {
//     name:'Margareth',
//     age: 40,
//     experience: 30,
//     criminalHistory: 0
// };

// // we can create factory of objects
// // similar to java constructors
// // or even C struct

// function BellBoy(name, age, hasWorkPermit, languages){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages
// }

// Object constructor
function HouseKeeper(name, yearsOfExperience, cleaningRepertoire){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        alert(this.name + " is cleaning lalalala");
    };
}

// a = new HouseKeeper('Jane', 200, ['Mowing', 'Sweeping', 'Mopping'])
// a.clean()

// Switch case
// similar to the ones in C and Java

// var key = 'w'

// switch(key){
//     case 'a':
//         alert('Wrong');
//         break;
//     case 'w':
//         alert('Yes');
//         break;
//     default:
//         alert('bye');
//         break;
// }

// Actual code for the project

const audio_files = ['tom-1', 'tom-2', 'tom-3', 'tom-4', 'crash', 'kick-bass', 'snare'];
const audio_instruments = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

function playDrum(key){
    document.getElementsByClassName(key)[0].classList.add('pressed');
    let audio_name = audio_files[audio_instruments.indexOf(key)];
    let sound = new Audio('sounds/' + audio_name + '.mp3');
    sound.play();
    setTimeout(function(){
        document.getElementsByClassName(key)[0].classList.remove('pressed');
    }, 200);
}

for(let i = 0; i<document.querySelectorAll('.drum').length; ++i){
    // I can combine these functions because the number of drums are the same
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        playDrum(this.innerHTML);
    })
    document.addEventListener('keydown', function(event){
        playDrum(event.key)
    });
}
