const { Router } = require("express");
const router = Router();
const { login, register, refreshToken, forgotPassword, createNewPassword } = require("../controllers/auth");
const { loginValidator } = require('../middleware/loginValidator');
const { registerValidator } = require('../middleware/registerValidator');


router.post("/auth/login", loginValidator, login);
router.post("/auth/register", registerValidator, register);
//Refresh token
router.post("/auth/refresh-token", refreshToken);
//Forgot password
router.put("/auth/forgot-password", forgotPassword);
//Create new password
router.put("/auth/new-password", createNewPassword);



module.exports = router;