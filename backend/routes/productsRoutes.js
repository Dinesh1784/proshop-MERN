const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

module.exports = router;
