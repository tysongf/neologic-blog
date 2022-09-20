const {
   getAllEntries,
   createEntry,
   deleteEntryById,
   getEntry,
   updateEntry,
} = require("../models/entries.model");

const { getPagination } = require("../services/query.js");

async function httpGetAllEntries(req, res) {
   const { limit, skip } = getPagination(req.query);
   return res.status(200).json(await getAllEntries(limit, skip));
}

async function httpPostEntry(req, res) {
   let newEntry = req.body;

   const errors = [];
   if (!newEntry.title) errors.push("'title' field is required.");
   if (!newEntry.description) errors.push("'description' field is required.");
   if (!newEntry.quote_id) errors.push("'quote_id' field is required.");
   if (errors.length > 0) return res.status(400).json({ errors: errors });

   try {
      return res.status(201).json(await createEntry(newEntry));
   } catch (err) {
      return res.status(400).json({ errors: [err.message] });
   }
}

async function httpGetEntry(req, res) {
   return res.status(200).json(await getEntry(req.params.id));
}

async function httpPatchEntry(req, res) {
   try {
      return res.status(201).json(await updateEntry(req.body));
   } catch (err) {
      return res.status(400).json({ errors: [err.message] });
   }
}

async function httpDeleteEntry(req, res) {
   const entryId = req.params.id;
   if (await !getEntry(entryId)) {
      res.status(404).json({ errors: [`Entry ${entryId} not found.`] });
   }
   try {
      res.status(200).json(await deleteEntryById(entryId));
   } catch (err) {
      res.status(400).json({ errors: [err.message] });
   }
}

module.exports = {
   httpGetAllEntries,
   httpPostEntry,
   httpGetEntry,
   httpPatchEntry,
   httpDeleteEntry,
};
