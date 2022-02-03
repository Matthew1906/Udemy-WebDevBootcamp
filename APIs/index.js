// Import external modules
require('dotenv').config();
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const { type } = require('os');

// Build App
const app = express();

// Initialize Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Joke API (Any)
app.get('/random-joke', function(req, res){
    let jokeEndpoint = 'https://v2.jokeapi.dev/joke/Any';
    https.get(jokeEndpoint, function(response){
        response.setEncoding('utf-8');
        response.on('data', function(content){
            let joke = JSON.parse(content);
            res.set("Content-Type", "text/html");
            res.write('<h2>Here is a joke for you!</h2><p>');
            if (joke.type == 'twopart'){
                res.write(joke.setup + ' ➔ ' + joke.delivery);
            }
            else{
                res.write(joke.joke);
            }
            res.write('</p>');
            res.write("<a href='/'>Go Back</a>");
            res.end();
        })
    });
});

app.post('/weather', function(req, res){
    let city = req.body.city===''? 'Jakarta': req.body.city.charAt(0).toUpperCase() + req.body.city.slice(1).toLowerCase();
    let weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=' + process.env.WEATHER_API;
    https.get(weatherEndpoint, function(response){
        res.set("Content-Type", "text/html");
        if(response.statusCode !=200){
            res.write('Location not found!');
            res.write("<br><a href='/'>Go Back</a>");
            res.end();
        }
        else{
            response.setEncoding('utf-8');
            response.on('data', function(content){
                let weather = JSON.parse(content);
                // res.send(weather);
                res.write("<h2>Here is a today's weather in " + city +"!</h2><p>");
                res.write("The weather is " + weather.weather[0].description + ',<br> and the temperature feels like ' + weather.main.feels_like + ' degrees celcius.');
                res.write('</p>');
                let imageURL = 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png';
                res.write('<img src = ' + imageURL + '>');
                res.write("<br><a href='/'>Go Back</a>");
                res.end();
            });
        }
        
    });
});

app.post('/newsletter', function(req, res){
    const client = require('@mailchimp/mailchimp_marketing'), 
        newsletter_apikey = process.env.MAILCHIMP_API,
        newsletter_listId = process.env.MAILCHIMP_LIST;
    let email = req.body.email;
    client.setConfig({
        apiKey: newsletter_apikey,
        server: "us14",
    });
          
    async function addNewMember(){
        const response = await client.lists.addListMember(newsletter_listId, {
            email_address: email,
            status: "subscribed"
        });
        res.set("Content-Type", "text/html");
        if (response.status === 404){
            res.write('Sign Up failed!');
            res.write("<br><a href='/'>Go Back</a>");
            res.end();
        }
        else{
            res.write('Sign Up Successfull!');
            res.write("<br><a href='/'>Go Back</a>");
            res.end();
        }
    };
    addNewMember();
});

// Listen to the port
app.listen(3000, function(){
    console.log('Server started on port 3000');
});

/* What are APIs?
 * -> Commands, Functions, 
 *    Protocols, and Objects
 *    that Programmer uses
 *    to create software or interact with an external system.
 * -> Examples: PoliceAPI, Sheety, Jquery, Bootstrap, OpenWeather, FacebookAPI, etc.
 * -> This section: interact with external systems (get data from other servers)
 */