// Import modules
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');
const ejs = require('ejs');
const express = require("express");

// Setup App
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const items = [];

// Routes
app.get("/", function(req, res){
  res.render('list', {day:date.getDate(), items:items});
});

app.post("/add", function(req, res){
  let new_activity = req.body.activity;
  if(new_activity.length>0){
    items.push(new_activity);
  }
  res.redirect('/');
})

app.post("/remove", function(req,res){
  let to_delete = req.body.item;
  items.splice(to_delete, 1);
  res.redirect('/');
})

// Listen
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});