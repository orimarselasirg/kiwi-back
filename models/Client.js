const {Schema, model} = require('mongoose');

const client = new Schema({
    identification: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    license_plates: {
        type: [],
        required: false
    } 
})

module.exports = model('Client', client)