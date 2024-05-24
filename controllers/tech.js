const {
    getAllTech,
    getAllTechById,
    createTech,
    modifyTech,
    deleteTech
} = require('../services/tech')

const { ERROR } = require('.././constans')


const createTechnician = async (req, res) => {
    try {
        res.status(200).json(await createTech(req.body))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).json({ msg: ERROR })
    }
}

const getAllTechnician = async (req, res) => {
    try {
        res.status(200).json(await getAllTech())
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).json({ msg: ERROR })
    }
}

const getOneTechbicianById = async (req, res) => {
    const { _id } = req.query
    try {
        res.status(200).json(await getAllTechById(_id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).json({ msg: ERROR })
    }
}

const modifyTechnician = async (req, res) => {
    const { _id } = req.query
    try {
        res.status(200).json(await modifyTech(_id, req.body))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
            path: 'controller'
        })
        res.status(400).json({ msg: ERROR })
    }
}

const deleteTechnician = async (req, res) => {
    try {
        return res.status(200).json(await deleteTech(req.id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
            path: 'controller'
        })
        res.status(400).json({ msg: ERROR })
    }
}

module.exports = {
    createTechnician,
    getAllTechnician,
    getOneTechbicianById,
    modifyTechnician,
    deleteTechnician
}