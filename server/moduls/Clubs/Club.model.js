const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
    name : String,
    tags : [String],
    entrants : [{
	    id : String,
	    login : String,
	    image : String,
    }],
    messages : [{
	    id : String,
	    login : String,
	    image : String,
	    text : String,
	    link : Number 
    }]

}, { versionKey: false });

const Clubs = mongoose.model('Clubs', ClubSchema);
module.exports = Clubs;