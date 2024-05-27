const { Router } = require("express");
const { createTechnician,
    getAllTechnician,
    getOneTechbicianById,
    modifyTechnician,
    deleteTechnician } = require('../controllers/tech');
const { verifyToken, isAdmin } = require("../middleware/authjwt.js");
const { techValidator } = require('../middleware/techValidator');
const { validateOrganizationId } = require("../middleware/generalMiddleware.js");
const router = Router();

router.get('/tech', validateOrganizationId, getAllTechnician)
router.get('/gettech', validateOrganizationId, getOneTechbicianById)
router.post('/tech', validateOrganizationId, createTechnician)
router.put('/modytech', [validateOrganizationId, verifyToken, isAdmin], modifyTechnician)
router.delete('/deletetech', [validateOrganizationId, verifyToken, isAdmin], techValidator, deleteTechnician)

module.exports = router

// , [verifyToken, isAdmin] esto va como middleware en el post del createtecnician