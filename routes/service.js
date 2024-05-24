const { Router } = require("express");
const router = Router();
const {createService, getAllService, getServicesByVehicleid, modifyServices, deleteService, loadDb} = require('../controllers/services')
const {idValidator, licenseValidator} = require('.././middleware/serviceValidator')

router.get('/loadDb', loadDb)
router.get('/servicesbylicence', licenseValidator, getServicesByVehicleid)
router.post('/services', createService)
router.get('/allservices', getAllService)
router.put('/modifyservices', idValidator,  modifyServices)
router.delete('/deleteservices',idValidator,deleteService)

module.exports = router