const mongoose = require("mongoose");
const connectDB = async() => {
   try {
      const connect = await mongoose.connect(process.env.MONGO_URL);
      console.log(`✅ MongoDB Connected`);
   } catch (err) {
      console.error("❌ Error connecting to DB:", err.message);
   }
};
module.exports = connectDB;
 