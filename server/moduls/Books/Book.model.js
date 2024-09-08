const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({

name : String,
image : String,
author : String,
description : String,
isStock : Boolean,
coutPoints : Number,
sumPoints : Number,
genre : String,
popularity : Number,
returnDate : Date,
comments : [{id : String, login : String, image : String, text : String, link : Number}]



}, { versionKey: false });

const Books = mongoose.model('Books', BookSchema);
module.exports = Books;