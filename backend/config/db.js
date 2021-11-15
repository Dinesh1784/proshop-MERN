const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`DATABASE CONNECTED TO ${conn.connection.name}`.cyan.underline);
  } catch (error) {
    console.log(`ERROR: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectToDb;
