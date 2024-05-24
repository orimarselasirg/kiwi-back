const {Schema, model} = require('mongoose');

const station = new Schema({
    workStation: {
        type: String,
        unique: true,
        required: true
    },    
})

module.exports = model('Station', station)