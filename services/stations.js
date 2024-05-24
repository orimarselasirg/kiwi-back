const Station = require('../models/Station')

const getStation = async() => {
    const allStations = await Station.find()
    return allStations
}

const createStation = async(workStation) => {
    await Station.create({ workStation })
    const allWorkStations = await Station.find()
    return {
        status: "Nueva estación creada",
        msg: allWorkStations
    }
}

const deleteStation = async(id) => {
    const stationDeleted = await Station.findOne({ _id: id })
    await Station.deleteOne({ _id: id })
    return {
        status: "Estación eliminada",
        msg: stationDeleted
    }
}

module.exports = {
    getStation,
    createStation,
    deleteStation
}