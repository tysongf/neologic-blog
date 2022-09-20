const { getExternalQuote } = require("../models/quotes.model");

async function httpGetQuote(req, res) {
   const newQuote = {
      quote: "Anything that can go wrong will go wrong, and at the worst possible time.",
      author: "The Developer",
   };
   try {
      getExternalQuote().then((quote) => {
         return res.status(200).json(quote);
      });
   } catch (err) {
      return res.status(400).json({ errors: [err] });
   }
}

module.exports = {
   httpGetQuote,
};
