const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema(
   {
      quote: { type: String, required: true },
      author: { type: String, required: true },
   },
   {
      timestamps: { createdAt: "created_at" },
   }
);

module.exports = mongoose.model("Quote", quotesSchema);
