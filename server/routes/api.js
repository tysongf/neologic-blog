const express = require("express");

const appRouter = require("./app.router");

const api = express.Router();

apiV1.use("/api", apiRouter);

module.exports = api;
