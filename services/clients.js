const Client = require("../models/Client");
const License = require("../models/License");
const Organizations = require("../models/Organizations");
const { PLATE_CREATED, PLATE_RELATED } = require("../constans");
const { infoLicense } = require("../helpers/infoLicense");

const getClient = async (organizationId) => {
    try {
        const clientFound = await Client.find({organizationId})
        if(clientFound.length === 0) {
            return {
                status: false,
                message: "Sin clientes creados",
            }
        }
        return {
            status: true,
            message: "ClientFounded",
            msg: clientFound
        }
    } catch (error) {
        return {
            status: false,
            message: "No existen clientes asociados a la organizacion",
        }
    }
}
// esta se usa cuando el cliente no existe, toma el el input de la licencia, crea y relaciona al cliente nuevo con la licencia
const getClientByIdAndLicense = async (idClient, license) => {
    const clientFound = await Client.findOne({ identification: idClient })
    const licenseFound = await License.findOne({ license_plate: license })
    //crear cliente y licencia
    //flor debe habilitar modal creacion de clientes (incluye placa), ejecuta createClient()  
    if (!clientFound && !licenseFound) {
        return {
            client : false,
            license : false,
            isRelated : false,
            data : ''
        }
    }
    //crear licencia
    //habilitar modal de creacion de licencia, ejecuta RelatedLicenseClient()
    if (clientFound && !licenseFound) {
        return {
            client : true,
            license : false,
            isRelated : false,
            data : clientFound
        }
    }
    if (!clientFound && licenseFound) {
        return {
            client : false,
            license : true,
            isRelated : false
        }
    }

    //todo ok, crea servicio
    if (clientFound && clientFound.license_plates.find(l => l === license)) {
        return {
            client : true,
            license : true,
            isRelated : true,
            data : clientFound
        }
    }
    //cliente y licencia existe pero no hay relacion, ejecuta RelatedLicenseClient()
    const licensePlateRelated = clientFound.license_plates.find(l => l === license)
    if (clientFound && licenseFound && !licensePlateRelated) {
        return {
            client : true,
            license : true,
            isRelated : false,
            data: clientFound
        }
    }
}


const createClient = async (client, organizationId) => {
    const clientCreated = await Client.create({...client, organizationId: organizationId}) //creo cliente
    return {
        status: "Clientcreated",
        msg: clientCreated
    }
}


// funcion solo para el administrador
const RelatedLicenseClient = async (idClient, license) => {
    const licenseFounded = await License.findOne({ license_plate: license }) //busco si existe la placa
    const clientToUpdate = await Client.findOne({ identification: idClient }) //traigo el cliente a actualizar
    if (!clientToUpdate) {
        return {
            status: false,
            msg: "Client not found"
        }
    }
    if (!licenseFounded) {
        await License.create({ license_plate: license })
        await Client.findByIdAndUpdate(clientToUpdate, { license_plates: [...clientToUpdate.license_plates, license] }) //si la placa no existe, actualizo
        return {
            status: "License created and related",
            msg: PLATE_CREATED
        }
    }
    else {
        await Client.findByIdAndUpdate(clientToUpdate, { license_plates: [...clientToUpdate.license_plates, license] })
    }
    return {
        status: "License related",
        msg: PLATE_RELATED
    }
}

const deleteClient = async (idClient) => {
    if(await infoLicense(idClient)) {
        return {
            status: "Error",
            msg: "Ya tiene servicios asociados"
        }
    }
    const clientToDelete = await Client.findOne({ identification: idClient })
    const arrLicensesClient = clientToDelete.license_plates
    await Promise.all(arrLicensesClient.map(async c => {
        await License.deleteOne({ license_plate: c }) //elimina cada placa del arr de licencias
    }))
    await Client.deleteOne({ identification: idClient })
    return {
        status: "Client deleted",
        msg: clientToDelete
    }
}

module.exports = {
    getClient,
    createClient,
    RelatedLicenseClient,
    getClientByIdAndLicense,
    deleteClient,
    infoLicense
}