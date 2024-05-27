const Station = require('../models/Station')

const stationValidator = async (req, res, next) => {
    const { method } = req
    if (method === 'POST') {
        console.log(req.method)
        const isStation = await Station.findOne({ workStation: req.body.workStation, organizationId: req.headers.organization_id})
        if (isStation && isStation.workStation === req.body.workStation) {
            return res.status(401).json({
                status: false,
                msg: "La estación ya existe",
            });
        }
        try {
            // req = req
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
    //////// DELETE
    // console.log(req.query.id)
    // const stationFound = await Station.findOne({ _id: req.query.id })
    // //console.log("encuentra",stationFound)
    // if (!stationFound) {
    //     return res.status(401).json({
    //         status: false,
    //         msg: "No existe estación con ese id",
    //     });
    // }
    // try {
    //     req.id = req.query.id
    // } catch (error) {
    //     console.log({
    //         name: error.name,
    //         msg: error.message,
    //     });
    //     return res.status(404).json({
    //         status: false,
    //         path: 'middleware'
    //     });
    // }
    // next()
}

module.exports = {
    stationValidator
}