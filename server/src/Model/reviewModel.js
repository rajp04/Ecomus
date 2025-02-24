const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            default: 5,
            min: 1,
            max: 5
        },
    },
    { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;