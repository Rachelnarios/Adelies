const mongoose = require('mongoose')
//mongodb://USERNAME:H3U92hXM@class-mongodb.cims.nyu.edu/rnr266
var day = new mongoose.Schema({
 date: Date,
 stars: Number,
 best: String,
 bad: String,
 better:String,
 quote:String,

});

mongoose.model('day', day)
mongoose.connect('mongodb://localhost/Rachelnarios-final-project')
