var pattern = [], started = false, level = 0;
const color = ['blue','green', 'red', 'yellow'];

function generatePattern(){
    let new_color = color[Math.floor(Math.random()*4)]
    playSound(new_color);
    pattern.push(new_color);
    // console.log(pattern); // testing purposes
}

function playSound(audio_name){
    if(audio_name!='wrong'){
        $('#'+audio_name).toggleClass('pressed');
        window.setTimeout(function(){
            $('#'+audio_name).toggleClass('pressed');
        }, 100);
    }
    else{
        $('body').toggleClass('game-over')
        window.setTimeout(function(){
            $('body').toggleClass('game-over')
        }, 100);
    }
    let sound = new Audio('sounds/' + audio_name + '.mp3');
    sound.play();
}

function nextSequence(){
    level+=1;
    $('#level-title').text('Level ' + level);
    let curr = 0;
    generatePattern();
    while(curr<pattern.length){
        $('button').click(function(e){
            console.log(e);
        })
    }
}


$(document).keypress(function() { 
    if(started===false){
        nextSequence();
    }
});