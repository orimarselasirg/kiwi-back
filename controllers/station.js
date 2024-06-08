const { ERROR } = require("../constans")
const { getStation, createStation, deleteStation } = require("../services/stations")


const getStations = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        res.status(200).send(await getStation(req.headers.organization_id, page, limit))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

const createStations = async (req, res) => {
    try {
        res.status(200).send(await createStation(req.body, req.headers.organization_id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

const deleteStations = async(req, res) => {
    try {
        res.status(200).send(await deleteStation(req.id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

module.exports = {
    getStations,
    createStations,
    deleteStations
}