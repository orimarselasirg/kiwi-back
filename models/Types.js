const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

// Apply the plugin
Types.plugin(mongoosePaginate);
module.exports = model('Types', Types)