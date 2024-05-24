const { Router } = require("express");
const  { verifyToken, isAdmin } = require("../middleware/authjwt.js");
const { getAllUser,
    getOneUser_id,
    modifyUser,
    deleteUser
} = require('../controllers/user');
const router = Router();

router.get('/user', getAllUser)
router.get('/getuser', getOneUser_id)
router.put('/modifyuser', [verifyToken, isAdmin], modifyUser)
router.delete('/deleteuser', [verifyToken, isAdmin], deleteUser)

module.exports = router