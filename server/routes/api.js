const express = require("express");

const apiRouter = require("./api.router");

const api = express.Router();

api.use("/api", apiRouter);

module.exports = api;
