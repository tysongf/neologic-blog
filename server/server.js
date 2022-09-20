require("dotenv").config(); //load environment variables
const { mongoConnect } = require("./services/mongo.js");
const http = require("http");
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

//Initialize server application
const server = http.createServer(app);
const API_PORT = process.env.API_PORT || 3000;

async function startServer() {
   await mongoConnect(); //Connect to Mongo DB
   server.listen(API_PORT, () => {
      console.log(`Listening on API_PORT: ${API_PORT} ...`);
   });
}

startServer();
