const { Router } = require("express");
const { getStations, createStations, deleteStations } = require("../controllers/station");
const { stationValidator } = require("../middleware/stationValidator");
const { validateOrganizationId } = require("../middleware/generalMiddleware");
const router = Router();

router.get("/station", validateOrganizationId, getStations)
router.post("/station", [validateOrganizationId, stationValidator], createStations)
router.delete("/station", [validateOrganizationId, stationValidator], deleteStations)

module.exports = router