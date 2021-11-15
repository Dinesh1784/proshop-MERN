require("dotenv").config();
const mongoose = require("mongoose");
const colors = require("colors");
const users = require("./data/users");
const products = require("./data/products");
const Product = require("./models/productModel");
const User = require("./models/userModel");
const Order = require("./models/orderModel");
const connectToDb = require("./config/db");

connectToDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    //creating user
    const createdUser = await User.insertMany(users);

    //getting admin user _id
    const adminUser = createdUser[0]._id;

    //adding user to each product
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    //creating product
    await Product.insertMany(sampleProducts);
    console.log("Data imported".green.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
const deleteData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    console.log("Data Deleted".red.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "--d") {
  deleteData();
} else {
  importData();
}
