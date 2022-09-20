const axios = require("axios");
const quotes = require("./quotes.mongo");
const mongo_options = { _id: 0, __v: 0 };
const NINJA_API_URL = process.env.NINJA_API_URL;
const NINJA_API_KEY = process.env.NINJA_API_KEY;

const quote_categories = [
   "attitude",
   "courage",
   "education",
   "experience",
   "future",
   "imagination",
   "knowledge",
   "learning",
   "success",
];

function getRandomCategory() {
   return quote_categories[Math.floor(Math.random() * quote_categories.length)];
}

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
   const NINJA_URL =
      process.env.NINJA_API_URL + "?category=" + getRandomCategory();
   const NINJA_HEADERS = { "X-Api-Key": process.env.NINJA_API_KEY };

   return await axios
      .get(NINJA_URL, {
         headers: NINJA_HEADERS,
      })
      .then((response) => {
         return response.data[0];
      })
      .catch((error) => {
         throw new Error(error);
      });
}

async function getRandomTSSQuote() {}

async function getRandomZenQuote() {}

module.exports = {
   getRandomLocalQuote,
   getExternalQuote,
};
