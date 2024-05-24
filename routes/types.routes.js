const { Router } = require("express");
const { getType, createType, modifyType, deleteType  } = require("../controllers/types.controller");
const router = Router();

router.delete("/types", deleteType)
router.get("/types", getType)
router.post("/types", createType)
router.put("/types", modifyType)

module.exports = router