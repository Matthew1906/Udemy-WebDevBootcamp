// Love Calculator using Random Number Generator

var first_person = prompt("What's your name?")
var second_person = prompt("What's the other person's name?")
var loveScore = Math.floor(Math.random()*100)

// Add Conditionals

// if(loveScore === 100){
//     alert('wow')
// }else{
//     alert('wow')
// }

// Comparators -> >, >=, <, <=, ==, ===, !=, !===
// == -> same value, loose data type
// === -> same value, same data type

// Combining Comparators -> ||, &&, !

if(loveScore>=70){
    alert('Your love score is ' + loveScore +', You love each other like peanut butter and jelly!')
}
else if(loveScore>=30 && loveScore<=70){
    // bad logic but I'm just following orders:v
    alert('Your love score is ' + loveScore)
}
else{
    alert('Your love score is ' + loveScore + ", Pretty low but don't worry! It's random number")
}

