const Organization = require("../models/Organizations");


const getOrganization = async(identification = null) => {
  
  if(identification) {
    const organization = await Organization.findOne({identification: identification, isDelete: false})
    return {
      status: true,
      message: "organizacion",
      data: organization
    }
  }

  const organizations = await Organization.find({isDelete: false})

  return {
    status: true,
    message: "listado de organizaciones",
    data: organizations
  }
}

const createOrganization = async(body) => {
  const organizationCreated = await Organization.create(body);
  return {
      status: true,
      message: "Organizacion creada",
      msg: organizationCreated
  }
}

const updateOrganization = async(id, body) => {
  const updatedOrganization = await Organization.updateOne({id}, body)
  return {
    status: true,
    message: "Organizacion actualizada",
    msg: updatedOrganization
  }
}


const deleteOrganization = async(id) => {
  const updatedOrganization = await Organization.updateOne({id}, {isDelete: true})
  return {
    status: true,
    message: "Organizacion eliminada",
    msg: updatedOrganization
  }
}

module.exports = {
  getOrganization,
  createOrganization,
  updateOrganization,
  deleteOrganization
}