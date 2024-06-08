const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase:true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        default: 'user'
    },
    status: {
        type: Boolean,
        default: true
    },
    refreshToken: {
        type: String,
        default: null
    },
    resetToken:{
        type: String,
        default: null
    },
    organizationId: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

// Apply the plugin
userSchema.plugin(mongoosePaginate);
module.exports = model('User', userSchema);