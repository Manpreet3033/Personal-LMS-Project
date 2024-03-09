const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
  },
  Instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  WhatYouWillLearn: {
    type: String,
  },
  ratingsAndReviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RatingsAndReviews",
  },
  price: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
