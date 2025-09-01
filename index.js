require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jSend = require("easy-jsend");
const mongoose = require("mongoose");
const helmet = require("helmet");

const connectDB = require("./src/config/db");
const productRouter = require("./src/routes/productRoutes");

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
jSend.init(app);

// Connect to Database
connectDB();

// Routes
app.use("/api/products", productRouter);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`✅ Listening on Port ${PORT}`);
});
