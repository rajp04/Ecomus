const Review = require('../Model/reviewModel');

// Create a review
const Create = async (req, res) => {
    try {
        const { name, email, product, comment, title, rating } = req.body;

        const newReview = await Review.create({ name, email, product, comment, title, rating });

        res.status(201).json({
            message: "Review created successfully",
            success: 1,
            review: newReview
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

// Get all reviews for a product
const GetReviews = async (req, res) => {
    try {
        const { id } = req.params;

        const reviews = await Review.find({ product: id }).populate('product');

        return res.status(200).json({
            success: 1,
            reviews
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

// Delete a review
const Reviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('product');
        res.status(200).json({
            message: "Reviews fetched successfully",
            success: 1,
            reviews,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0,
        });
    }
};


module.exports = { Create, GetReviews, Reviews };