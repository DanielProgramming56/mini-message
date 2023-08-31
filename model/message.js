const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageScheme = new Schema({
    text: {type: String, required: true},
    user: {type: String},
}, {timestamps: true})

module.exports = mongoose.model('message', messageScheme);