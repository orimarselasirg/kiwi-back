const {Schema, model} = require('mongoose');

const organizations = new Schema({
    companyName: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        unique: true,
        required: true
    },
    contactName: {
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
    usersId: {
        type: [],
        required: false
    },
    status: {
      type: Boolean,
      default: true
    },
    isDelete: {
      type: Boolean,
      default: false
    }
})

module.exports = model('Organizations', organizations)