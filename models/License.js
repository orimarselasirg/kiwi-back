const {Schema, model} = require('mongoose');

const license = new Schema({
    license_plate: {
        type: String,
        unique: true,
        required: true
    },
    organizationId: {
        type: String,
        required: true
    },
    services : {
        type: [],
        default: []
    }    
})

module.exports = model('License', license)