var guests = ['Albert', 'Andy', 'Johnny', 'Michael', 'Tony', 'Donny', 'Brownie']

attendee = prompt("Welcome to Whatever party, What's your name?")

if (guests.includes(attendee)){
    alert("The elevator's that way")
}
else{
    alert("You aren't registered in this event, Goodbye")
}