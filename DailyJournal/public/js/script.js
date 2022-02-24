// Hopefully the footer will always stay at the bottom
console.log(document.body.clientHeight);
console.log(window.innerHeight);
if(document.body.clientHeight+100<=window.innerHeight){
    document.getElementById('footer').classList.add('fixed-bottom');
}