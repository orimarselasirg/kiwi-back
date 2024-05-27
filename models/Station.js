const {Schema, model} = require('mongoose');

const station = new Schema({
    workStation: {
        type: String,
        unique: false,
        required: true
    },
    organizationId: {
        type: String,
        required: true
    },    
})

module.exports = model('Station', station)