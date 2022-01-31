// Import module
const express = require('express');
const bodyParser = require('body-parser');
// Create app that uses express function
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// simple get request
app.get('/', function(req, res){
    // response -> give response
    res.send('<h1>Hello World</h1>');
});

app.get('/contact', function(req, res){
    res.send('contact me at blablabla');
});

app.get('/about', function(req, res){
    res.send("Hello, My name is Matthew Adrianus Mulyono.");
});

app.get('/calculator', function(req, res){
    // send file
    res.sendFile(__dirname + '/calculator.html');
});

app.post('/calculator', function(req, res){
    let num1 = Number(req.body.num1),
        num2 = Number(req.body.num2), 
        operator = req.body.operator;
    switch(operator){
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            result = num1/num2;
            break; 
    }
    res.send(num1 + ' ' +  operator + ' ' + num2 + ' = ' + result);
});

app.get('/bmi', function(req, res){
    // send file
    res.sendFile(__dirname + '/bmi.html');
});

app.post('/bmi', function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight/(height*height);
    res.write('Your Body Mass Index is ' + bmi + '. ');
    if(bmi<16){
        res.write("You are severely thin!");
    }
    else if(bmi<17){
        res.write('You are moderately thin!');
    }
    else if(bmi<18.5){
        res.write('You are mildly thin!');
    }
    else if(bmi<25){
        res.write('You are normal!');
    }
    else if(bmi<30){
        res.write('You are overweight!');
    }
    else{
        res.write('You are Obese! Consult a doctor!');
    }
    res.end();
})

// listen to the port
app.listen(3000, function(){
    console.log('Server started on port 3000');
});         

// nodemon -> auto restart
// to handle nodemon error npm i pstree.remy@1.1.0 -D




