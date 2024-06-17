const Services = require('../models/Service')
const Licenses = require('../models/License')
const Client = require('../models/Client')

const createServices = async (data, organizationId) => {
    const licenseFound = await Licenses.findOne({license_plate : data.vehicle_id})
    if(!licenseFound) return 'Placa o licencia vehicular no creada'
    const service = await Services.create({...data, organizationId: organizationId})
    licenseFound.services = [...licenseFound.services, service]
    await licenseFound.save()
    return service
}

const getAllServices = async (organizationId, page, limit) =>{
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: { createdAt: -1 }
      };
    try {
        const allServices = await Services.paginate({organizationId}, options)
        if(allServices.length === 0) {
            return {
                status: false,
                message: "Sin mantenimientos creados",
            }
        }
        return allServices
    } catch (error) {
        return {
            status: false,
            message: "No existen mantenimientos asociados a la organizacion",
        }
    }
}

const getAllServiceByVehicle_id = async (data) =>{
    const licenseFound = await Licenses.findOne({license_plate : data})
    return licenseFound.services
}

const modifyService = async (id, data) => {
    await Services.findOneAndUpdate({id : id}, data)
    const modifyService = await Services.findOne({id : id})
    return modifyService
}
const deleteServices = async (id) => {
    const deletedServices =await Services.deleteOne({id: id})
    return deletedServices
}

module.exports = {
    createServices,
    getAllServices,
    getAllServiceByVehicle_id,
    modifyService,
    deleteServices
}