const { Router } = require("express");
const { getClients, createClients, licenseClient, getClientsByIdAndLicenses, deleteClients } = require("../controllers/client");
const { clientCreateValidator, clientDeleteValidator } = require("../middleware/clientValidator");
const router = Router();

router.get("/client", getClients)
router.post("/client", clientCreateValidator, createClients)
router.delete("/client/:identification", clientDeleteValidator, deleteClients) 
router.post("/clientsandlicenses", getClientsByIdAndLicenses)
router.put("/licenseClient", licenseClient)

module.exports = router;