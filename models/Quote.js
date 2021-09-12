import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    suggested: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    book: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
  },
  { collection: "quotes" }
);

module.exports = mongoose.models.Quotes || mongoose.model("Quotes", QuoteSchema);