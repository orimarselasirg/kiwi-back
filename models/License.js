const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

// Apply the plugin
license.plugin(mongoosePaginate);
module.exports = model('License', license)