const { Router } = require("express");
const router = Router();
const {createService, getAllService, getServicesByVehicleid, modifyServices, deleteService, loadDb} = require('../controllers/services')
const {idValidator, licenseValidator} = require('.././middleware/serviceValidator');
const { validateOrganizationId } = require("../middleware/generalMiddleware");

router.get('/loadDb', loadDb)
router.get('/servicesbylicence', [validateOrganizationId, licenseValidator], getServicesByVehicleid)
router.post('/services', validateOrganizationId, createService)
router.get('/allservices', validateOrganizationId, getAllService)
router.put('/modifyservices', [validateOrganizationId, idValidator],  modifyServices)
router.delete('/deleteservices',[validateOrganizationId, idValidator],deleteService)

module.exports = router