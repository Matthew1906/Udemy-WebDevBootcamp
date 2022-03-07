// Import modules
const bodyParser = require("body-parser");
const ejs = require('ejs');
const express = require("express");
const mongoose = require("mongoose");
const utils = require(__dirname + "/utils.js");
require('dotenv').config();

// Config Database
const mongoURL = process.env.DATABASE_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Build Schema
const DailyJournalSchema = new mongoose.Schema({
  date:String,
  body:String,
  last:String
});

// Generate Model
const DailyJournal = mongoose.model('DailyJournal', DailyJournalSchema);

// Setup App
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
/// Home route
app.get("/", (req, res)=>{
  journal = DailyJournal.find({}, (err, arr)=>{
    res.render('home', {journal:arr});
  });
});

/// Individual Post Page
app.get("/post/:postId", (req, res)=>{
  DailyJournal.findOne({_id:req.params.postId}, (err, obj)=>{
    res.render('post', {post:obj, index:req.params.postId});
  });
})

/// Edit Individual Post
app.get('/post/:postId/edit', (req,res)=>{
  DailyJournal.findOne({_id:req.params.postId}, (err, obj)=>{
    res.render('compose', {purpose:'edit', post:obj, index:req.params.postId});
  });
});

app.post('/post/:postId/edit', (req,res)=>{
  DailyJournal.findOneAndUpdate({_id:req.params.postId}, {body:req.body.content, last:utils.getDate()}, (err, obj)=>{
    res.redirect('/');
  });
});

/// Add New Posts
app.get('/compose', (req,res)=>{
  res.render('compose', {purpose:'add', date:utils.getDate()});
});

app.post('/compose', (req, res)=>{  
  let new_post = new DailyJournal({
    date:req.body.datetime, 
    body:req.body.content,
    last:req.body.datetime
  });
  new_post.save();
  res.redirect('/');
})

/// About Page
app.get('/about', (req,res)=>{
  res.render('about');
});

/// Contact Information Page
app.get('/contact', (req, res)=>{
  res.render('contact', {
    email:'fakemail@gmail.com',
    phone:'081234897124',
    linkedIn:'https://scholar.google.com/'
  })
})

// Listen
app.listen(3000, ()=>{
  console.log("Server started on port 3000.");
});