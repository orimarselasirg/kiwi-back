const Service = require("../models/Service");
const License = require("../models/License");

const idValidator = async (req, res, next) => {
  const serviceFound = await Service.findOne({ _id: req.query.id });
  console.log(serviceFound);
  if (!serviceFound) {
    return res.status(401).json({
      status: false,
      msg: "Id no encontrado",
    });
  }
  try {
    req.id = serviceFound.id;
  } catch (error) {
    console.log({
      name: error.name,
      msg: error.message,
    });
    return res.status(404).json({
      status: false,
      path : 'middleware'
    });
  }
  next();
};

const licenseValidator = async(req, res, next) =>{
  const licenseFound = await License.findOne({license_plate : req.query.vehicle_id})
  if(!licenseFound) {
    return res.status(404).send({
      status : false,
      msg : 'Placa o licencia de transtito no encontrada',
      path : 'middleware'
    })
  }
  try {
    req.vehicle_id = licenseFound.license_plate
  } catch (error) {
    return res.status(404).json({
      status: false,
      msg: "error middleware",
      path : 'middleware'
    });
  }
  next();
};

module.exports = {
  idValidator,
  licenseValidator
};
