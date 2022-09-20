const { mongoose, Schema } = require("mongoose");

const entriesSchema = new mongoose.Schema(
   {
      _id: { type: Schema.Types.ObjectId },
      title: { type: String, required: true },
      description: { type: String, required: true },
      quote: { type: Schema.Types.ObjectId, ref: "Quote" },
   },
   {
      timestamps: {
         createdAt: "created_at",
         updatedAt: "updated_at",
      },
   }
);

module.exports = mongoose.model("Entry", entriesSchema);
