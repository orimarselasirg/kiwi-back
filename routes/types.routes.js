const { Router } = require("express");
const { getType, createType, modifyType, deleteType  } = require("../controllers/types.controller");
const { validateOrganizationId } = require("../middleware/generalMiddleware");
const router = Router();

router.delete("/types",validateOrganizationId,  deleteType)
router.get("/types", validateOrganizationId, getType)
router.post("/types",validateOrganizationId,  createType)
router.put("/types",validateOrganizationId,  modifyType)

module.exports = router