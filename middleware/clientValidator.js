const Client = require("../models/Client");

const clientCreateValidator = async (req, res, next) => {
    const { identification, name, lastName, phone, email } = req.body
    const isClient = await Client.findOne({ identification: identification })
    if (isClient) {
        return res.status(401).json({
            status: false,
            msg: "El cliente ya existe",
        });
    }
    if(!identification || !name || !lastName || !phone || !email){
        return res.status(401).json({
            status: false,
            msg: "Faltan campos requeridos",
        });
    }
    try {
        req.client = req.body
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
        });
        return res.status(404).json({
            status: false,
            path: 'middleware'
        });
    }
    next()
}

const clientDeleteValidator = async(req, res, next) => {
    const isClient = await Client.findOne({ identification: req.params.identification })
    if(!isClient) {
        return res.status(404).json({
            status: false,
            msg: "No existe cliente con esa identificación",
        });
    }
    try {
        req.idClient = isClient.identification
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
        });
        return res.status(404).json({
            status: false,
            path: 'middleware'
        });
    }
    next()
}

module.exports = {
    clientCreateValidator,
    clientDeleteValidator
}