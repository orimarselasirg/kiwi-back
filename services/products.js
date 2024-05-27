const Product = require("../models/Products");

const getProduct = async(organizationId) => {
    try {
        const products = await Product.find({organizationId})
        if(products.length === 0) {
            return {
                status: false,
                message: "No hay productos creados"
            }
        }
        return products
    } catch (error) {
        return {
            status: false,
            message: "No productos asociados a esta organizacion",
        }
    }
}

const createProduct = async(product, organizationId) => {
    const productCreated = await Product.create({...product, organizationId: organizationId})
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