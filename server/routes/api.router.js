const express = require("express");
const entriesController = require("../controllers/entries.controller");
const quotesController = require("../controllers/quotes.controller");
const apiRouter = express.Router();

apiRouter.get("/entries", entriesController.httpGetAllEntries);
apiRouter.post("/entries", entriesController.httpPostEntry);
apiRouter.patch("/entries", entriesController.httpPatchEntry);
apiRouter.get("/entries/:id", entriesController.httpGetEntry);
apiRouter.delete("/entries/:id", entriesController.httpDeleteEntry);

apiRouter.get("/quote", quotesController.httpGetQuote);

module.exports = apiRouter;
