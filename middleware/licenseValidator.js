const License = require("../models/License");
const Client = require("../models/Client");

const licenseValidation = async (req, res, next) => {
    const clientFound = await Client.findOne({ identification: req.query.idClient })
    const licenseFound = await License.findOne({ license_plate: req.query.license })
    if (!clientFound && !licenseFound) {
        return res.status(401).json({
            status: false,
            msg: "Licencia y cliente no especificado",
        });
    }
    if (!clientFound || !licenseFound) {
        return res.status(401).json({
            status: false,
            msg: "Licencia o cliente no especificado",
        });
    }
    try {
        req.license = licenseFound.license_plate
        req.client = clientFound
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
        });
        return res.status(404).json({
            status: false,
            path: 'midlleware'
        });
    }
    next()
}

module.exports = {
    licenseValidation
}