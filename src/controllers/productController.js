const mongoose = require("mongoose");
const Products = require("../models/productModel");

const getAllProducts = async (req, res) => {
   if (parseInt(req.query.limit) <= 0 || parseInt(req.query.page) <= 0) {
      return res.fail("Limit Or Page must be greater than zero");
   }
   const limit = parseInt(req.query.limit) || 10;
   const page = parseInt(req.query.page) || 1;
   const skip = (page - 1) * limit;

   try {
      const products = await Products.find().limit(limit).skip(skip);
      const totalProducts = await Products.countDocuments();
      const totalPages = Math.ceil(totalProducts / limit);
      res.success({ totalProducts, totalPages, products });
   } catch (error) {
      res.error({ error });
   }
};
const getProductById = async (req, res) => {
   try {
      const id = req.params.id;

      if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.fail({ message: "Invalid product ID" }, 400);
      }
      const product = await Products.findById(id);
      res.success({ product });
   } catch (error) {
      res.error({ error });
   }
};
const postProduct = async (req, res) => {
   try {
      const newProduct = req.body;
      const product = await Products.create(newProduct);
      res.success({ product }, 201);
   } catch (error) {
      res.error({ error: error.message }, 500);
   }
};
const updateProduct = async (req, res) => {
   try {
      const newData = req.body;
      const productId = req.params.id;
      const product = await Products.findByIdAndUpdate(productId, newData, {
         new: true,
      });
      if (!product) return res.fail("Product not found", 404);
      res.success({ product }, 200);
   } catch (error) {
      res.error({ error: error.message }, 500);
   }
};
const deleteProduct = async (req, res) => {
   try {
      const productId = (req.params.id);
      const product = await Products.findOneAndDelete({ _id: productId });
      if (!product) return res.fail("Product not found", 404);
      res.success("Deleted" , 200)
   } catch (error) {}
};
module.exports = {
   getAllProducts,
   getProductById,
   postProduct,
   updateProduct,
   deleteProduct,
};
