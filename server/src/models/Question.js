const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  pollId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Poll"
  },

  questionText: {
    type: String,
    required: true
  },

  required: {
    type: Boolean,
    default: true
  },

  options: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model(
  "Question",
  questionSchema
);