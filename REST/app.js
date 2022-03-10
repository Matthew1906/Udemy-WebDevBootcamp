// Import modules
const bodyParser = require('body-parser');
const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');

// Setup Database
mongoose.connect("mongodb://localhost:27017/wikiUdemyDB", {useNewUrlParser:true})

const articleSchema = {
    title:String,
    content:String
};

const Article = mongoose.model('Article', articleSchema);

// Setup Application
const app = express()
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Chain Routes
app.route('/articles')
    .get((req, res)=>{
        Article.find({}, (err, arr)=>{
            res.send(arr);
        });
    })
    .post((req, res)=>{
        let new_article = new Article({title:req.body.title, content:req.body.content});
        new_article.save();
        res.send({
            status:'Success!'
        });
    })
    .delete((req, res)=>{
        Article.deleteMany({}, (err, arr)=>{
            if(!err){
                res.send({
                  status:'Successfully delete all articles'
             })
            }else{
                res.send(err);
            }
        })
    });

app.route('/articles/:articleTitle')
    .get((req,res)=>{
        Article.findOne({title:req.params.articleTitle}, (err, obj)=>{
            if(!err){
                res.send(obj);
            }
        });
    })
    .put((req,res)=>{
        Article.updateOne({title:req.params.articleTitle}, 
            {$set:{title:req.body.title, content:req.body.content}}, 
            (err, obj)=>{
                res.send({
                    status:'Update successful!'
                })
            }
        );
    })
    .patch((req,res)=>{
        Article.updateOne({title:req.params.articleTitle}, 
            {$set:req.body}, 
            (err, obj)=>{
                res.send({
                    status:'Update successful!'
                })
            }
        );
    })
    .delete((req,res)=>{
        Article.deleteOne({title:req.params.articleTitle}, (err, obj)=>{
            if(!err){
                res.send({
                    status:'Successfully deleted ' + req.params.articleTitle
                });
            }
        });
    });

// Listen
app.listen(3000, ()=>{
    console.log("Server started at port 3000.");
});