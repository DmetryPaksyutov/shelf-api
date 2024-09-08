const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    title : String,
    image : String,
    text : String,
    type : Number,
    date : Date,
}, { versionKey: false });

const News = mongoose.model('News', NewSchema);
module.exports = News;