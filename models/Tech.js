const { Schema, model } = require('mongoose');

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
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Tech', techSchema);