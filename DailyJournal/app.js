// Import modules
const bodyParser = require("body-parser");
const ejs = require('ejs');
const express = require("express");
const utils = require(__dirname + "/utils.js");

// Setup App
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Setup Global variable
const journal = [];

// Routes
/// Home route
app.get("/", (req, res)=>{
  res.render('home', {journal:journal});
});

/// Individual Post Page
app.get("/post/:postId", (req, res)=>{
  let post = journal[req.params.postId];
  res.render('post', {post:post, index:req.params.postId});
})

/// Edit Individual Post
app.get('/post/:postId/edit', (req,res)=>{
  let post = journal[req.params.postId];
  res.render('compose', {purpose:'edit', post:post, index:req.params.postId});
});

app.post('/post/:postId/edit', (req,res)=>{
  let post = journal[req.params.postId];
  post.body = req.body.content;
  post.last = utils.getDate();
  res.redirect('/');
});

/// Add New Posts
app.get('/compose', (req,res)=>{
  res.render('compose', {purpose:'add', date:utils.getDate()});
});

app.post('/compose', (req, res)=>{  
  let new_post = new utils.Post(req.body.datetime, req.body.content, req.body.datetime);
  journal.push(new_post);
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