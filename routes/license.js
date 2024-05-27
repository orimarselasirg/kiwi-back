const { Router } = require("express");
const { getLicenses, createLicenses, deleteLicenses } = require("../controllers/license");
const { licenseValidation } = require("../middleware/licenseValidator");
const {validateOrganizationId} =require('../middleware/generalMiddleware')
const router = Router();

router.get("/license", validateOrganizationId, getLicenses)
router.post("/license", validateOrganizationId, createLicenses)
router.delete("/license", [licenseValidation, validateOrganizationId], deleteLicenses)

module.exports = router;validateOrganizationId