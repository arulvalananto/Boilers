const express = require("express");

const boilerRoutes = require("./routes/boiler.routes");
const errorController = require("./controllers/error.controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", boilerRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} this route`,
  });
});

app.use(errorController);

module.exports = app;
