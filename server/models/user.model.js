const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your First name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your Last name"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
  email: {
    type: String,
    required: [true, "Please enter your Email-id"],
    unique: [true, "Email alrrady exists"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blogpost",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
