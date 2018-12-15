'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Duplicate email address found'
    },
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);