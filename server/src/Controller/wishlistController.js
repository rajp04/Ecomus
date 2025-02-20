const Wishlist = require('../Model/wishlistModel.js');

// Add product to wishlist
const AddToWishlist = async (req, res) => {
    try {
        const userId = req.user
        const { productId } = req.body;

        // Check if the product is already in the wishlist
        const existingItem = await Wishlist.findOne({ userId, productId });

        if (existingItem) {
            return res.status(400).json({
                message: "Product already in wishlist",
                success: 0
            });
        }

        // Create a new wishlist entry
        const wishlistItem = new Wishlist({ userId, productId });
        await wishlistItem.save();

        res.status(201).json({
            message: "Product added to wishlist",
            success: 1,
            data: wishlistItem
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

// Remove product from wishlist
const RemoveFromWishlist = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedItem = await Wishlist.findOneAndDelete({ _id: id });

        if (!deletedItem) {
            return res.status(404).json({
                message: "Product not found in wishlist",
                success: 0
            });
        }

        res.status(200).json({
            message: "Product removed from wishlist",
            success: 1
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

// Get all wishlist items for a user
const GetUserWishlist = async (req, res) => {
    try {
        const id = req.user;

        const wishlist = await Wishlist.find({ userId: id }).populate('productId');

        res.status(200).json({
            message: "Wishlist fetched successfully",
            success: 1,
            data: wishlist
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

module.exports = {
    AddToWishlist,
    RemoveFromWishlist,
    GetUserWishlist
};
