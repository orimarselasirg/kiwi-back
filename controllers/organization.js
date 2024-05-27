const { ERROR } = require("../constans")
const { createOrganization,deleteOrganization,getOrganization,updateOrganization } = require("../services/organization")



const getOrganizationController = async(req, res) => {
    try {
        res.status(200).send(await getOrganization(req.query.identification))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

const createOrganizationController = async(req, res) => {
    try {
        res.status(200).send(await createOrganization(req.body))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

const updateOrganizationController = async(req, res) => {
    try {
        res.status(200).send(await updateOrganization(req.params.id, req.body))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

const deleteOrganizationController = async(req, res) => {
    try {
        res.status(200).send(await deleteOrganization(req.params.id))
    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message
        })
        res.status(400).send(ERROR)
    }
}

module.exports = {
  createOrganizationController,
  deleteOrganizationController,
  getOrganizationController,
  updateOrganizationController
}