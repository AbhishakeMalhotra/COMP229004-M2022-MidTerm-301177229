//Name : Abhishake Malhotra
//Student ID : 301177229
// Web App : Car List
// MIDTERM for Web Application Development

// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://admin:s85cbOsVc9rSwUas@cluster0.pwjw1.mongodb.net/cars_detail?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}