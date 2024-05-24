const { ERROR } = require("../constans")
const { getStation, createStation, deleteStation } = require("../services/stations")


const getStations = async (req, res) => {
    try {
        res.status(200).send(await getStation())
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
        res.status(200).send(await createStation(req.station))
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