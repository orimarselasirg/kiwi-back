const { Router } = require("express");
const { createOrganizationController,deleteOrganizationController,getOrganizationController,updateOrganizationController } = require("../controllers/organization");
const router = Router();

router.get("/organization", getOrganizationController)
router.post("/organization", createOrganizationController)
router.delete("/organization/:id", deleteOrganizationController) 
router.put("/organization/:id", updateOrganizationController)

module.exports = router;