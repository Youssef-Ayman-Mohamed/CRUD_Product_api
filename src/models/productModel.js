const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "Product Name Is Required"],
      },
      price: {
         type: Number,
         required: [true, "Product price Is Required"],
      },
      description: {
         type: String,
         required: false,
      },
      quantity: {
         type: Number,
         required: true,
         default: 0,
      },
   },
   { timestamps: true }
);


module.exports = mongoose.model("Products", productSchema, "CRUD_products");