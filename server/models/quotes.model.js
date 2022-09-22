const mongoose = require("mongoose");
const axios = require("axios");
const quotes = require("./quotes.mongo");
const mongo_options = { _id: 0, __v: 0 };
const NINJA_API_URL = process.env.NINJA_API_URL;
const NINJA_API_KEY = process.env.NINJA_API_KEY;

const quote_categories = ["imagination", "knowledge", "learning", "success"];

function getRandomCategory() {
   return quote_categories[Math.floor(Math.random() * quote_categories.length)];
}

async function getRandomLocalQuote() {
   return quotes.aggregate([{ $sample: { size: 1 } }]);
}

async function upsertQuote(quote) {
   if (!quote._id) {
      quote._id = new mongoose.Types.ObjectId();
   }
   const newQuote = await quotes.updateOne(
      { quote: quote.quote },
      {
         _id: quote._id,
         quote: quote.quote,
         author: quote.author,
         category: quote.category,
      },
      { upsert: true }
   );
   return quotes.findOne({ _id: newQuote.upsertedId }, { __v: 0 });
}

async function loadExternalQuote() {
   const NINJA_URL =
      process.env.NINJA_API_URL + "?category=" + getRandomCategory();
   const NINJA_HEADERS = { "X-Api-Key": process.env.NINJA_API_KEY };

   return await axios
      .get(NINJA_URL, {
         headers: NINJA_HEADERS,
      })
      .then((response) => {
         const quote = response.data[0];
         const localQuote = upsertQuote(quote);
         return localQuote;
      })
      .catch((err) => {
         throw new Error("Failed to fetch a quote");
      });
}

async function getRandomTSSQuote() {}

async function getRandomZenQuote() {}

module.exports = {
   getRandomLocalQuote,
   loadExternalQuote,
};
