const entries = require("./entries.mongo");
const mongo_options = { _id: 0, __v: 0 };

async function getAllEntries() {
   return await entries.find({}, mongo_options);
}

async function getEntry(id) {
   return await entries.find({ id: id }, mongo_options);
}

async function createEntry(entry) {
   return await entries.createOne(
      { title: entry.title },
      { description: entry.description },
      { quote_id: entry.quote_id }
   );
}

async function deleteEntry(id) {
   return await entries.delete({ id });
}

module.exports = {
   createEntry,
   getAllEntries,
   getEntry,
   deleteEntry,
};
