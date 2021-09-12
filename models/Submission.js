import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    name: {
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
    quote: {
        type: String, 
        required: true
    },
    character: {
        type: String, 
        required: true
    }
  },
  { collection: "submission" }
);

module.exports = mongoose.models.Submissions || mongoose.model("Submissions", SubmissionSchema);