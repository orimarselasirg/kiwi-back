const Station = require('../models/Station')

const getStation = async(organizationId, page, limit) => {
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: { createdAt: -1 }
      };
    try {
        const allStations = await Station.paginate({organizationId}, options)
        if(allStations.length === 0) {
            return []
        }
        return allStations
        
    } catch (error) {
        return {
            status: false,
            message: "No existen estaciones asociadass a la organizacion"
        }
    }
}

const createStation = async(workStation, organizationId) => {
    await Station.create({ ...workStation,  organizationId:  organizationId })
    const allWorkStations = await Station.find({organizationId})
    return {
        status: "Nueva estación creada",
        msg: allWorkStations
    }
}

const deleteStation = async(id) => {
    // const stationFound = await Station.findOne({ _id: req.query.id })
    // //console.log("encuentra",stationFound)
    // if (!stationFound) {
    //     return res.status(401).json({
    //         status: false,
    //         msg: "No existe estación con ese id",
    //     });
    // }

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