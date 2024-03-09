const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Category', CategorySchema)