const { Router } = require("express");
const  { verifyToken, isAdmin } = require("../middleware/authjwt.js");
const { getAllUser,
    getOneUser_id,
    modifyUser,
    deleteUser
} = require('../controllers/user');
const { validateOrganizationId } = require("../middleware/generalMiddleware.js");
const router = Router();

router.get('/user', validateOrganizationId, getAllUser)
router.get('/getuser', validateOrganizationId, getOneUser_id)
router.put('/modifyuser', [validateOrganizationId, verifyToken, isAdmin], modifyUser)
router.delete('/deleteuser', [validateOrganizationId, verifyToken, isAdmin], deleteUser)

module.exports = router