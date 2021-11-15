require("dotenv").config();
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const connectToDb = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;
//middleware imports
const errorMiddleware = require("./middleware/errorMiddleware");
//routes imports
const productRoutes = require("./routes/productsRoutes");

//global middlware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//initial route
app.get("/", (req, res, next) => {
  res.send("hello");
});
//routes
app.use("/api/v1/products", productRoutes);
//404
app.use(errorMiddleware.ge404);
//global error handler
app.use(errorMiddleware.globalErrorHandler);
//Database connection
connectToDb();
//Server
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
