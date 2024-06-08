const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const services  = new Schema({
    type :{
        type : String,
        required: true
    },
    cronometer :{
        type : String,
        required: true
    },
    datetime : {
        type : String,
        required: true
    },
    workstation : {
        type : String,
        required : true
    },
    technician : {
        type : String,
        required : true
    },
    driver : {
        type : String,
        required: false
    },
    kilometers : {
        type : String,
        required: true
    },
    goods : {
        type : Array,
        required: true
    },
    vehicle_id : {
        type : String,
        required: true
    },
    comments : {
        type : String,
        required : false,    
    },
    organizationId: {
        type: String,
        required: true
    },
})

// Apply the plugin
services.plugin(mongoosePaginate);

module.exports = model('Services', services)