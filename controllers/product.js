const { ERROR } = require("../constans")
const { getProduct, createProduct, deleteProduct } = require("../services/products")

const getProducts = async(req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        res.status(200).send(await getProduct(req.headers.organization_id, page, limit))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

const createProducts = async(req, res) => {
    const product = req.body
    try {
        res.status(200).send(await createProduct(product, req.headers.organization_id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

const deleteProducts = async(req, res) => {
    const { id } = req.params
    try {
        res.status(200).send(await deleteProduct(id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

module.exports = {
    getProducts,
    createProducts,
    deleteProducts
}