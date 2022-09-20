const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema(
   {
      quote: { type: String, required: true },
      author: { type: String, required: true },
      category: { type: String, required: false },
   },
   {
      timestamps: { createdAt: "created_at" },
   }
);

module.exports = mongoose.model("Quote", quotesSchema);
