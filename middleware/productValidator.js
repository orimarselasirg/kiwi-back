const Product = require("../models/Products");

const productValidator = async (req, res, next) => {
    const productFound = await Product.findOne({ _id: req.params.id });
    if (!productFound) {
        return res.status(401).json({
            status: false,
            msg: "Producto no encontrado",
        });
    }
    try {
        req.id = productFound.id;
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
    next();
};

module.exports = {
    productValidator
}