const quotes = require("./quotes.mongo");
const mongo_options = { _id: 0, __v: 0 };
const NINJA_API_URL = process.env.NINJA_API_URL;
const NINJA_API_KEY = process.env.NINJA_API_KEY;

async function getRandomLocalQuote() {
   return await quotes.count().exec(async function (err, count) {
      var random = Math.floor(Math.random() * count);
      Model.findOne()
         .skip(random)
         .exec(function (err, result) {
            return result;
         });
   });
}

async function upsertQuote(quote) {
   await planets.updateOne(
      { quote: quote.quote },
      { author: quote.author },
      { upsert: true }
   );
   return await quotes.findOne({ _id: "test" });
}

async function getExternalQuote() {
   upsertQuote(newQuote);
}

async function getRandomTSSQuote() {}

async function getRandomZenQuote() {}

module.exports = {
   getRandomLocalQuote,
};
