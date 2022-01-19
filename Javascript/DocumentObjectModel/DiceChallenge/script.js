function rollDice(){
    // get random dice number
    index1 = Math.ceil(1 + Math.random()*5);
    index2 = Math.ceil(1 + Math.random()*5);
    // change the dice image
    document.getElementsByClassName('img1')[0].setAttribute('src','images/dice' + index1 + '.png'); 
    document.getElementsByClassName('img2')[0].setAttribute('src','images/dice' + index2 + '.png');
    // show result
    if(index1>index2){
        document.querySelector('h1').textContent = '🚩Player 1 wins!';
    }
    else if(index1<index2){
        document.querySelector('h1').textContent = 'Player 2 wins!🚩';
    }
    else{
        document.querySelector('h1').textContent = 'Draw!';
    }
}

function play(){
    // roll the dice after refresh
    var refreshed = window.sessionStorage.getItem('reload')
    if(refreshed){
        rollDice();
    }
    else{
        window.sessionStorage.setItem('reload', 'true');
        index1 = Math.ceil(1 + Math.random()*5);
        index2 = Math.ceil(1 + Math.random()*5);
        document.getElementsByClassName('img1')[0].setAttribute('src','images/dice' + index1 + '.png'); 
        document.getElementsByClassName('img2')[0].setAttribute('src','images/dice' + index2 + '.png');
    }
}
