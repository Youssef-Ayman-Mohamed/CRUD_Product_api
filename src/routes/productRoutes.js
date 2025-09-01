const productController = require("../controllers/productController");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const validator = require("../middlewares/express-validationResult");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post(
   "/",
   body("name").notEmpty().isString().trim(),
   body("price").isNumeric().notEmpty(),
   body("description").optional().trim().isString(),
   body("quantity").notEmpty().isNumeric(),
   validator,
   productController.postProduct
);
router.patch(
   "/:id",
   body("name").isString().trim().optional(),
   body("price").isNumeric().optional(),
   body("description").trim().isString().optional(),
   body("quantity").isNumeric().optional(),
   validator,
   productController.updateProduct
);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
