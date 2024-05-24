const Product = require("../models/Products");

const getProduct = async() => {
    const products = await Product.find()
    return products
}

const createProduct = async(product) => {
    const productCreated = await Product.create(product)
    return {
        status: "Product created",
        msg: productCreated
    }
}

const deleteProduct = async(id) => {
    const productToDelete = await Product.findOne({ _id: id })
    await Product.deleteOne({ _id: id })
    return {
        status: "Product deleted",
        msg: productToDelete
    }
}

module.exports = {
    getProduct,
    createProduct,
    deleteProduct
}