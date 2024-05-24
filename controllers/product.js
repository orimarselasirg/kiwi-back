const { ERROR } = require("../constans")
const { getProduct, createProduct, deleteProduct } = require("../services/products")

const getProducts = async(req, res) => {
    try {
        res.status(200).send(await getProduct())
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
        res.status(200).send(await createProduct(product))
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