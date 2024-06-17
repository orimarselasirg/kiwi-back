const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

// Apply the plugin
station.plugin(mongoosePaginate);
module.exports = model('Station', station)