const {
   getAllEntries,
   upsertEntry,
   deleteEntryById,
   getEntry,
   deleteEntry,
} = require("../models/entries.model");

const { getPagination } = require("../services/query.js");

async function httpGetAllEntries(req, res) {
   const { limit, skip } = getPagination(req.query);
   return res.status(200).json(await getAllEntries(limit, skip));
}

async function httpPostEntry(req, res) {
   let newEntry = req.body;

   const errors = [];
   if (!newLaunch.title) errors.push("'title' field is required.");
   if (!newLaunch.description) error.push("'description' field is required.");
   if (!newEntry.quote_id) errors.push("'quote_id' field is required.");
   if (errors.length > 0) return res.status(400).json({ errors: errors });

   newEntry.createdAt = new Date();

   try {
      return res.status(201).json(await createEntry(newLaunch));
   } catch (err) {
      return res.status(400).json({ errors: [err.message] });
   }
}

async function httpDeleteEntry(req, res) {
   const entryId = Number(req.params.id);
   if (await !getEntry(entryId)) {
      res.status(404).json({ errors: [`Entry ${entryId} not found.`] });
   }
   try {
      res.status(200).json(await deleteEntry(entryId));
   } catch (err) {
      res.status(400).json({ errors: [err.message] });
   }
}

module.exports = {
   httpGetAllEntries,
   httpPostEntry,
   httpDeleteEntry,
};
