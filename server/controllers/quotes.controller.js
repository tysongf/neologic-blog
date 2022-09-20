const {
   getExternalQuote,
   getRandomLocalQuote,
} = require("../models/quotes.model");

async function httpGetQuote(req, res) {
   getExternalQuote()
      .then((quote) => {
         return res.status(200).json(quote);
      })
      .catch((err) => {
         //Failsafe: return random quote from local database.
         getRandomLocalQuote().then((quote) => {
            console.log(quote);
            return res.status(200).json(quote);
         });
      });
}

module.exports = {
   httpGetQuote,
};
