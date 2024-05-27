const Client = require("../models/Client");
const License = require("../models/License");

const getLicense = async(organizationId) => {
    try {
        const licenses = await License.find({organizationId})
        if(licenses.length === 0) {
            return {
                status: false,
                message: "No hay licencias creadas",
            }
        }
        return licenses
    } catch (error) {
        return {
            status: false,
            message: "No existen placas",
        }
        
    }
}

const createLicense = async(license, organizationId) => {
    const licenseCreated = await License.create({...license, organizationId: organizationId});
    return {
        status: "license created",
        msg: licenseCreated
    }
}

//REVISAR ESTO, QUE BORRE SOLO SI LA PLACA NO TIENE SERVICIO
const deleteLicense = async(license, client) => {
    await Client.findByIdAndUpdate(client,{ license_plates: [...client.license_plates.filter(l => l !== license)] }) //update del cliente,  filtro la licencia a eliminar
    const licenseDeleted = await License.findOne({ license_plate: license }) //guardo la licencia a eliminar
    await License.deleteOne({ license_plate: license }) //borra del model License
    return {
        status: "license deleted",
        msg: licenseDeleted
    }
}

module.exports = {
    getLicense,
    createLicense,
    deleteLicense
}