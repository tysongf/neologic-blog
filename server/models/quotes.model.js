const quotes = require("./quotes.mongo");
const mongo_options = { _id: 0, __v: 0 };

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
}

async function getExternalQuote() {
   //tro to get TSS Quote
   //fallback to Zen Quote
   //throw error on fail
}

async function getRandomTSSQuote() {}

async function getRandomZenQuote() {}

module.exports = {
   getRandomLocalQuote,
};
