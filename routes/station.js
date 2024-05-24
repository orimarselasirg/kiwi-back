const { Router } = require("express");
const { getStations, createStations, deleteStations } = require("../controllers/station");
const { stationValidator } = require("../middleware/stationValidator");
const router = Router();

router.get("/station", getStations)
router.post("/station", stationValidator, createStations)
router.delete("/station", stationValidator, deleteStations)

module.exports = router