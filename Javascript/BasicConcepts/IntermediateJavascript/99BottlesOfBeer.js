var curr = 99;
while(curr>0){
    if(curr>1){
        console.log(curr + ' bottles of beer on the wall, ' + curr + ' bottles of beer.')
    }
    else{
        console.log(curr + ' bottle of beer on the wall, ' + curr + ' bottle of beer.')
    }
    curr--;
    if(curr == 0){
        console.log('Take one down and pass it around, no more bottles of beer on the wall.')
        console.log('\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.')
    }
    else if(curr>1){
       console.log('Take one down and pass it around, ' + curr + ' bottles of beer on the wall.') 
    }
    else{
        console.log('Take one down and pass it around, ' + curr + ' bottle of beer on the wall.') 
    }
}