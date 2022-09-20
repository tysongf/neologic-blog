const {
   loadExternalQuote,
   getRandomLocalQuote,
} = require("../models/quotes.model");

async function httpGetQuote(req, res) {
   //Load a new quote from external API into local database and returns it
   loadExternalQuote()
      .then((quote) => {
         return res.status(200).json(quote);
      })
      .catch((err) => {
         //Failsafe: returns an existing quote from local database.
         getRandomLocalQuote().then((quote) => {
            return res.status(200).json(quote);
         });
      });
}

module.exports = {
   httpGetQuote,
};
