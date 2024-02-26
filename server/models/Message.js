const mongoose = require("mongoose");
require("dotenv").config();

const MessageSchema = new mongoose.Schema(
  {
    senderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recieverID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;