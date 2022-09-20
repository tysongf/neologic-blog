const { getRandomLocalQuote } = require("../models/quotes.model");

async function httpGetQuote(req, res) {
   const newQuote = {
      quote: "Anything that can go wrong will go wrong, and at the worst possible time.",
      author: "The Developer",
   };
   try {
      quotesModel.getExternalQuote((quote) => {
         newQuote = quote;
      });
   } catch (err) {
      console.log(newQuote.quote);
   }
}

module.exports = {
   httpGetQuote,
};
