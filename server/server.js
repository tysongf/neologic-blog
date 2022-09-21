require("dotenv").config(); //load environment variables
const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const api = require("./routes/api");
const { mongoConnect } = require("./services/mongo");

const app = express();
app.use(helmet()); //security package
app.use(cors());
app.use(morgan("combined")); //request logger
app.use(express.json()); //parse json requests
app.use(api); //api routes

//Serve client (front-end) at root path
app.use(express.static(path.join(__dirname, "..", "public")));

//Enable client-side routing
app.get("/*", (req, res) => {
   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

//Initialize server
const server = http.createServer(app);
const API_PORT = process.env.API_PORT || 3000;

async function startServer() {
   await mongoConnect(); //Connect to Mongo DB
   server.listen(API_PORT, () => {
      console.log(`Listening on port ${API_PORT} ...`);
   });
}

startServer();
