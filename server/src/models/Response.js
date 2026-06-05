const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
  {
    pollId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Poll",
      required: true
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },

    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question"
        },

        selectedOption: String
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Response",
  responseSchema
);