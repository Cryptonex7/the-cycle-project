const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    name: String,
    email: String,
    password: String,
    joined: String
});

mongoose.model('users', userSchema);