document.querySelector('ul').lastElementChild.innerHTML = 'I just changed it';

// aside from CSS selector, we can also get elements through tag names, classes, ids, etc.

// if use elements -> returns array
var list_items = document.getElementsByTagName('li')

list_items[1].style.color = 'purple';

// When changing styles, the property that uses - will change into camel case (in most cases)
// style value must be in string format

// document.querySelector('body').style.backgroundColor = 'blue';