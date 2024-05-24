const { Router } = require("express");
const { getLicenses, createLicenses, deleteLicenses } = require("../controllers/license");
const { licenseValidation } = require("../middleware/licenseValidator");
const router = Router();

router.get("/license", getLicenses)
router.post("/license", createLicenses)
router.delete("/license", licenseValidation, deleteLicenses)

module.exports = router;