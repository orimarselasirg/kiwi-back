const { getAllUsers, getAllUserById, modifyUsers, deleteUsers } = require('../services/users');
const { ERROR } = require('.././constans')


const getAllUser = async (req, res) => {
    try {
        res.status(200).json(await getAllUsers(req.headers.organization_id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).json({ msg: ERROR })
    }
}

const getOneUser_id = async (req, res) => {
    const { _id } = req.query;
    try {
        res.status(200).json(await getAllUserById(_id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).json({ msg: ERROR })
    }
}

const modifyUser = async (req, res) => {
    const { _id } = req.query
    try {
        res.status(200).json(await modifyUsers(_id, req.body))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
            path: 'controller'
        })
        res.status(400).json({ msg: ERROR })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { _id } = req.query
        return res.status(200).json(await deleteUsers(_id))
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
    getAllUser,
    getOneUser_id,
    modifyUser,
    deleteUser
}