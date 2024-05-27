const { Router } = require("express");
const { getClients, createClients, licenseClient, getClientsByIdAndLicenses, deleteClients } = require("../controllers/client");
const { clientCreateValidator, clientDeleteValidator } = require("../middleware/clientValidator");
const {validateOrganizationId} =require('../middleware/generalMiddleware')
const router = Router();

router.get("/client", getClients)
router.post("/client", [validateOrganizationId, clientCreateValidator], createClients)
router.delete("/client/:identification", [validateOrganizationId, clientDeleteValidator], deleteClients) 
router.post("/clientsandlicenses", validateOrganizationId, getClientsByIdAndLicenses)
router.put("/licenseClient", validateOrganizationId, licenseClient)

module.exports = router;