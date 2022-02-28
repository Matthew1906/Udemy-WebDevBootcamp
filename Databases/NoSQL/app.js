// const MongoClient = require('mongodb').MongoClient;

// // Connect URL
// const url = 'mongodb://127.0.0.1:27017';

// // Connect to MongoDB
// MongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err, client) => {
//     if (err) {
//         return console.log(err);
//     }

//     // Specify database you want to access
//     const db = client.db('orchardDB');
//     const fruits = db.collection('fruits');
//     fruits.insertMany([
//         {_id:1, name:'Apple'},
//         {_id:2, name:'Orange'},
//         {_id:3, name:'Banana'},
//         {_id:4, name:'Lemon'}
//     ], (err, results) => {

//     });
//     fruits.find().toArray((err, results) => {
//         console.log(results);
//     });
// });

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017//orchardDB", {useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name:String
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple"
})

fruit.save();