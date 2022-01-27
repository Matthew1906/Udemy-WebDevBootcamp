// place Jquery CDN before your js script calling

// if we include them in the head
// $(document).ready(function(){
//     // applied to all buttons
//     $('h1').css('color', 'red')
// });

// We can minify our file into the annoying to read version like in Jquery cdn source file
// Minify -> shorter to compile

// select elements in Jquery using $(selector)

// manipulate styles -> separate behaviour from styles by adding classes
$('h1').addClass('big-title')
// hasClass can check if the selected element has a class
// removeClass can remove specific class from selected elements

// change text
$('button').text("Don't click me!")
// change html
$('button').html("<strong>Click me!</strong>");

// manipulate attributes
$('a').attr('href', 'https://www.udemy.com');
$('a').attr('target', '_blank')

// event listeners
$('button').click(function (e) { 
    e.preventDefault();
    $('h1').toggleClass('big-title')
});

// detect keypress
$(document).keypress(function (e) { 
    $('h1').text(e.key);
});

// on function (check docs)
$('a').on('mouseover', function(){
    $('a').css('color', 'red');
});

// before, after (outside the element), append, prepend (inside the selected)
// remove -> remove all selected elements

// hide -> we can hide
// toggle -> hide and show
// slideUp, slideDown
// animate -> custom CSS -> dict like -> only numeric value




