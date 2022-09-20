const mongoose = require("mongoose");

const entriesSchema = new mongoose.Schema(
   {
      title: { type: String, required: true },
      description: { type: String, required: true },
      quote: { type: String, required: false },
   },
   {
      timestamps: {
         createdAt: "created_at",
         updatedAt: "updated_at",
      },
   }
);

module.exports = mongoose.model("Entry", entriesSchema);
