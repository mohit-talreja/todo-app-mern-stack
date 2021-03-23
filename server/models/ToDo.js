const mongoose = require('mongoose')

require('./db')

module.exports = new mongoose.model('ToDo', new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}))