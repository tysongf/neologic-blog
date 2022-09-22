const mongoose = require("mongoose");
const entries = require("./entries.mongo");
const entries_transformer = { __v: 0 };

async function getAllEntries() {
   return await entries
      .find({}, entries_transformer)
      .populate("quote", entries_transformer);
}

async function getEntry(id) {
   return await entries
      .find({ _id: id }, entries_transformer)
      .populate("quote", entries_transformer);
}

async function createEntry(entry) {
   return await entries.create({
      _id: new mongoose.Types.ObjectId(),
      title: entry.title,
      description: entry.description,
      quote: entry.quote,
   });
}

async function updateEntry(id, entry) {
   return await entries.updateOne({ _id: id }, entry);
}

async function deleteEntryById(id) {
   return await entries.deleteOne({ _id: id });
}

module.exports = {
   createEntry,
   getAllEntries,
   getEntry,
   updateEntry,
   deleteEntryById,
};
