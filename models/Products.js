const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const products = new Schema({
    product : {
        type : String,
        required : true
    },
    brand : {
        type :  String,
        required : true
    },
    partnumber : {
        type : String,
        required : true,
        unique: true
    },
    organizationId: {
        type: String,
        required: true
    },
})

// Apply the plugin
products.plugin(mongoosePaginate)
module.exports = model('Products', products)