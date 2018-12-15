'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    name: {
        type: String,
        required: 'Duplicate email address found'
    },
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);