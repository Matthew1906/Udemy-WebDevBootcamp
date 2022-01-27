var pattern = []
var started = false, level = 0, curr = 0;
const color = ['blue','green', 'red', 'yellow'];

function generatePattern(){
    let new_color = color[Math.floor(Math.random()*4)]
    playSound(new_color);
    pattern.push(new_color);
    console.log(pattern); // testing purposes
}

function playSound(audio_name){
    if(audio_name!='wrong'){
        $('#'+audio_name).toggleClass('pressed');
        window.setTimeout(function(){
            $('#'+audio_name).toggleClass('pressed');
        }, 100);
    }
    else{
        $('#level-title').text('Game Over, Press Any Key to Restart')
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
    curr = 0;
    generatePattern();
}

$('.btn').click(function(e){
    if(started === true){
        let clicked = e.target.getAttribute("id");
        if(clicked == pattern[curr]){
            curr++;
            playSound(clicked);
            if(curr==pattern.length){
                window.setTimeout(nextSequence, 500);
            }
        }
        else{
            pattern = [];
            started = false;
            level = 0;
            playSound('wrong');
        }
    }
    
});

$(document).keypress(function() { 
    if(started==false){
        started = true;
        nextSequence();
    }
});