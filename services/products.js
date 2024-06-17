const Product = require("../models/Products");
// https://www.youtube.com/watch?v=vimddE9Evfs


const getProduct = async(organizationId, page, limit) => {
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: { createdAt: -1 },  // Sort by creation date descending
    
    };

    try {
        const products = await Product.paginate({organizationId},options);
        if(products.length === 0) {
            return {
                status: false,
                message: "No hay productos creados"
            }
        }
        return products;
    } catch (error) {
        return {
            status: false,
            message: "No productos asociados a esta organización",
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