const entries = require("./entries.mongo");
const mongo_options = { __v: 0 };

async function getAllEntries() {
   return await entries.find({}, mongo_options);
}

async function getEntry(id) {
   return await entries.find({ _id: id }, mongo_options);
}

async function createEntry(entry) {
   return await entries.create({
      title: entry.title,
      description: entry.description,
      quote_id: entry.quote_id,
   });
}

async function updateEntry(entry) {
   return await entries.updateOne({ _id: entry._id }, entry);
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
