const Client = require("../models/Client")
const Service = require("../models/Service")

const infoLicense = async (idClient) => {
    const clientToDelete = await Client.findOne({ identification: idClient })
    const arrLicensesClient = clientToDelete.license_plates 
    for (let i = 0; i < arrLicensesClient.length; i++) {
        const serviceFound = await Service.findOne({ vehicle_id: arrLicensesClient[i] })
        if (serviceFound) {
            return true
        }
    }
    return false
}

module.exports = { infoLicense }