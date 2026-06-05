const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: String,

    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    isAnonymous: {
      type: Boolean,
      default: true
    },

    isPublished: {
      type: Boolean,
      default: false
    },

    expiresAt: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Poll",
  pollSchema
);
