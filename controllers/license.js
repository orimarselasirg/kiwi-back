const { getLicense, createLicense, deleteLicense } = require('../services/licenses')


const getLicenses = async(req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        res.status(200).send(await getLicense(req.headers.organization_id, page, limit))
    } catch (error) {
        console.log(error)
    }
}

const createLicenses = async(req, res) => {
    try {
        res.json(await createLicense(req.body, req.headers.organization_id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
    }
}

const deleteLicenses = async(req, res) => {
    try {
        res.json(await deleteLicense(req.license, req.client))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
    }
}

module.exports = {
    getLicenses,
    createLicenses,
    deleteLicenses
}