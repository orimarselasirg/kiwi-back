const Tech = require("../models/Tech");

const techValidator = async (req, res, next) => {
    const techFound = await Tech.findOne({ _id: req.query._id });
    if (!techFound) {
        return res.status(401).json({
            status: false,
            msg: "Id no encontrado",
        });
    }
    try {
        req.id = techFound.id;
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
        });
        return res.status(400).json({
            status: false,
            msg: "error middleware",
        });
    }
    next();
};

module.exports = {
    techValidator,
};
