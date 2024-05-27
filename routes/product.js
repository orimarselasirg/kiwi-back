const { Router } = require("express");
const { getProducts, createProducts, deleteProducts } = require("../controllers/product");
const { productValidator } = require("../middleware/productValidator");
const { validateOrganizationId } = require("../middleware/generalMiddleware");
const router = Router();

router.get("/product", validateOrganizationId, getProducts)
router.post("/product", validateOrganizationId, createProducts)
router.delete("/product/:id", [validateOrganizationId, productValidator], deleteProducts)

module.exports = router