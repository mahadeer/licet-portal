var db = require('../../db');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    admin: { type: Boolean, default: false },
    lastLoggedIn: { type: Date, default: Date.now() }
});

module.exports = db.model("User", userSchema);