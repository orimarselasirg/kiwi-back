const { Router } = require("express");
const { getProducts, createProducts, deleteProducts } = require("../controllers/product");
const { productValidator } = require("../middleware/productValidator");
const router = Router();

router.get("/product", getProducts)
router.post("/product", createProducts)
router.delete("/product/:id", productValidator, deleteProducts)

module.exports = router