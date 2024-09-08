const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : String,
    login : String,
    password : String,
    image: String,
    balls : Number,
    records : [String],
    taken : [String],
    story : [String],
    bookshelf : [String],
    clubs : [String],
    friends : [String]


}, { versionKey: false });

UserSchema.virtual('wordsCount').get(function () {
    return this.words.length
});


const User = mongoose.model('User', UserSchema);
module.exports = User;