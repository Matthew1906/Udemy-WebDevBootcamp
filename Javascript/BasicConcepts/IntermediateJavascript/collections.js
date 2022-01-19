// store data in lists

var guests = ['Albert', 'Andy', 'Johnny', 'Michael', 'Tony', 'Donny', 'Brownie']

// access similar to C/C++ array
alert(guests[1])

// length using .length

alert(guests.length)

// includes check if a value exists

alert(guests.includes('Albert'))

// slice is also possible

alert(guests.slice(1,5))

// insertion and deletion to the back

guests.push('Joko')

guests.pop()

alert(guests)

var output = [], curr = 1

function fizzBuzz(){
    var isAffected = false, result = '';
    if(curr%3 == 0){
        result+='Fizz';
        isAffected = true;
    }
    if(curr%5==0){
        result+='Buzz';
        isAffected = true;
    }
    if(isAffected===false){
        output.push(curr);
    }
    else{
        output.push(result);
    }
    curr++;
}

// While loops
while(curr<=100){
    fizzBuzz();
    console.log(output);
}

