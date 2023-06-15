const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    category: { type: String, required: true },
    desciption: { type: String, required: true },
    image: {
      public_id: String,
      url: String,
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        like: {
          type: Number,
        },
      },
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    rating: {
      average: { type: Number, default: 0 },
      total: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
    deletedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogpost", blogpostSchema);
