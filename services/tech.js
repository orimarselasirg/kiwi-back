const Tech = require('../models/Tech');
const { TECH_NOT_FOUND } = require('../constans')

const getAllTech = async (organizationId, page, limit) => {
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: { createdAt: -1 }
      };
    try {
        const allTech = await Tech.paginate({organizationId}, options);
        if(allTech.length === 0) {
            return []
        }
        return allTech
        
    } catch (error) {
        return {
            status: false,
            message: "No existen tecnicos asociados a la organizacion"
        }
    }
}

const getAllTechById = async (data) => {
    const tech = await Tech.findOne({ _id: data })
    if (!tech) {
        return {
            status: false,
            message: TECH_NOT_FOUND
        }
    }
    return tech
};

const createTech = async (data, organizationId) => {
    const { name, document_dni } = data;
    const newTech = await Tech.create(
        {
            name,
            document_dni,
            organizationId          
        })
    return newTech;
};

const modifyTech = async (id, data) => {
    const { name, document_dni } = data;
    const updatedTech = await Tech.findByIdAndUpdate(id, {
        name,
        document_dni
    },
        {
            new: true
        });
    return updatedTech;
};

const deleteTech = async (id) => {
    const delTech = await Tech.findOne({ _id: id })
    if (!delTech) {
        return {
            status: TECH_NOT_FOUND
        }
    }
    const deletedtedTech = await Tech.findByIdAndUpdate(id, {
        status: false
    },
        {
            new: true
        });

    return deletedtedTech;
};

module.exports = {
    getAllTech,
    getAllTechById,
    createTech,
    modifyTech,
    deleteTech
}