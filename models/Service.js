const {Schema, model} = require('mongoose');

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

module.exports = model('Services', services)