const {createServices, getAllServices, getAllServiceByVehicle_id, modifyService, deleteServices} = require('../services/services')
const {ERROR} = require('.././constans')
const Products = require('.././models/Products')
const License = require('.././models/License')
const Client = require('.././models/Client')
const productDb = require('.././products.json')
const clientDb = require('.././clients.json')
const licenseDb = require('.././licenses.json')

const loadDb = async(req, res) => {
    try {
        await Products.insertMany(productDb, console.log('Productos cargados'))
        await License.insertMany(licenseDb, console.log('Liceencias cargados'))
        await Client.insertMany(clientDb, console.log('Clientes cargados'))
        res.status(200).json('datos cargados')
    } catch (error) {
        console.log(error);
    }
}

const createService = async(req, res) =>{
    try {
        res.status(200).json(await createServices(req.body, req.headers.organization_id))    
    } catch (error) {
        console.log({
            name : error.name,
            msg : error.message
        })
        res.status(400).json({msg : ERROR })
    }
}

const getAllService = async(req, res) =>{
    try {
        res.status(200).json(await getAllServices(req.headers.organization_id))    
    } catch (error) {
        console.log({
            name : error.name,
            msg : error.message
        })
        res.status(400).json({msg : ERROR })
    }
}

const getServicesByVehicleid = async(req, res) =>{
    // const {vehicle_id} = req.query
    // console.log(req);
    try {
        res.status(200).json(await getAllServiceByVehicle_id(req.vehicle_id))
    } catch (error) {
        console.log({
            name : error.name,
            msg : error.message
        })
        res.status(400).json({msg : ERROR })
    }
}

const modifyServices = async(req, res) =>{
    const {id} = req.query
    try {
        res.status(200).json(await modifyService(id, req.body))    
    } catch (error) {
        console.log({
            name : error.name,
            msg : error.message,
            path : 'controller'
        })
        res.status(400).json({msg : ERROR })
    }
}

const deleteService = async(req, res) =>{
    try {
        return res.status(200).json(await deleteServices(req.id))
    } catch (error) {
        console.log({
            name : error.name,
            msg : error.message,
            path : 'controller'
        })
        res.status(400).json({msg : ERROR })
    }
}

module.exports = {createService, getAllService, getServicesByVehicleid, modifyServices, deleteService, loadDb}