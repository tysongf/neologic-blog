require("dotenv").config(); //load environment variables
const express = require("express");
const path = require("path");
const api = require("./routes/api");

const app = express();

app.use(express.json()); //parse json requests
app.use(api);

//Serve client site at root url
app.use(express.static(path.join(__dirname, "..", "public")));

//Enable client-side routing
app.get("/*", (req, res) => {
   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
