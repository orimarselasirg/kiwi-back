const {Schema, model} = require('mongoose');

const Types = new Schema({
    type: {
        type: String,
        required: true
    },
    organizationId: {
        type: String,
        required: true
    },
})

module.exports = model('Types', Types)