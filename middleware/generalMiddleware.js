const Organization = require("../models/Organizations");

const validateOrganizationId = async(req, res, next) => {
  if(!req.headers.organization_id) {
    return res.status(404).json({
        status: false,
        message: 'El id de la organizacion no fue sumiministrado'
    })
}

  try {
      const organization = await Organization.findById(req.headers.organization_id)
  } catch (error) {
      return res.status(404).json({
          status: false,
          path: 'middleware',
          message: "el Id de la organizacion no existe"           
      })
  }
  next()
}

module.exports = {
  validateOrganizationId
}