// Import modules
const bodyParser = require("body-parser");
const ejs = require('ejs');
const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

// Config Database 
const mongoURL = 'mongodb+srv://Matthew1906:'+ process.env.PASSWORD +'@udemywebdevdb.9fggl.mongodb.net/todolistUdemyDB?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define Schema
const TodoSchema = new mongoose.Schema({
  title:String,
  todo:[{content:String}]
});

// Define Model
const Todo = mongoose.model('Todo', TodoSchema);

// Setup App
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
/// Homepage
app.get(["/","/:listName"], function(req, res){
  if(req.originalUrl == '/'){
    Todo.findOne({title:'Today'}, '-_id', (err,obj)=>{
      if(obj==null){
        todayTodo = new Todo({title:'Today', todo:[]});
        todayTodo.save();
        res.render('list', {title:todayTodo.title, items:todayTodo.todo});
      }
      else{
        res.render('list', {title:obj.title, items: obj.todo});
      }
    });
  }else{
    Todo.findOne({title:req.params.listName}, '-_id', (err,obj)=>{
      if(obj==null){
        newTodo = new Todo({title:req.params.listName, todo:[]});
        newTodo.save();
        res.render('list', {title:newTodo.title, items:newTodo.todo});
      }else{
        res.render('list', {title:obj.title, items:obj.todo});
      }
    });
  }
});

/// add an item
app.post(["/add", "/:listName/add"], function(req, res){
  let new_activity = req.body.activity;
  if(new_activity.length>0){
    if(req.originalUrl == '/add'){
      Todo.updateOne({title:'Today'}, {'$push':{todo:{content:new_activity}}}, (err)=>{
        res.redirect('/');
      });
    } else{
      Todo.updateOne({title:req.params.listName}, {'$push':{todo:{content:new_activity}}}, (err)=>{
        res.redirect('/'+req.params.listName);
      });
    }
  }
})

/// remove an item
app.post(["/remove", "/:listName/remove"], (req,res)=>{
  if(req.originalUrl=='/remove'){
    Todo.updateOne({title:'Today'}, {$pull:{todo:{content:req.body.item}}},(err, obj)=>{res.redirect('/')});
  }
  else{
    Todo.updateOne({title:req.params.listName}, {$pull:{todo:{content:req.body.item}}},(err, obj)=>{res.redirect('/' + req.params.listName)});
  }
})

// Listen
app.listen(3000, ()=>{
  console.log("Server started on port 3000.");
});