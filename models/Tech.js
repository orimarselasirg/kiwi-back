const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const techSchema = Schema({
    name: {
        type: String,
        required: true
    },
    document_dni: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    organizationId: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

// Apply the plugin
techSchema.plugin(mongoosePaginate);
module.exports = model('Tech', techSchema);