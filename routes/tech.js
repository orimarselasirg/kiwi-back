const { Router } = require("express");
const { createTechnician,
    getAllTechnician,
    getOneTechbicianById,
    modifyTechnician,
    deleteTechnician } = require('../controllers/tech');
const { verifyToken, isAdmin } = require("../middleware/authjwt.js");
const { techValidator } = require('../middleware/techValidator');
const router = Router();

router.get('/tech', getAllTechnician)
router.get('/gettech', getOneTechbicianById)
router.post('/tech', createTechnician)
router.put('/modytech', [verifyToken, isAdmin], modifyTechnician)
router.delete('/deletetech', [verifyToken, isAdmin], techValidator, deleteTechnician)

module.exports = router

// , [verifyToken, isAdmin] esto va como middleware en el post del createtecnician