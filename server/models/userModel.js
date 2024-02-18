const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: false,
        trim: true,
        maxlength: 100
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: false,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        requried: true,
    }
});

module.exports = mongoose.model('user', userSchema);