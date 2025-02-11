const Coupon = require('../Model/couponCode.js');

// Get all coupons
const GetAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find().populate('applicableProducts');

        if (!coupons || coupons.length === 0) {
            return res.json({
                success: 0,
                message: 'No coupons found.'
            });
        }

        return res.json({
            success: 1,
            message: 'Coupons retrieved successfully.',
            result: coupons
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Get a single coupon by ID
const GetCouponById = async (req, res) => {
    try {
        const { id } = req.params;
        const coupon = await Coupon.findById(id).populate('applicableProducts');

        if (!coupon) {
            return res.json({
                success: 0,
                message: 'Coupon not found.'
            });
        }

        return res.json({
            success: 1,
            message: 'Coupon retrieved successfully.',
            result: coupon
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Create a new coupon
const Create = async (req, res) => {
    try {
        const { code, discountValue, maxDiscountAmount, minimumPurchaseAmount, expirationDate, usageLimit, applicableProducts, applicableCategories, isActive } = req.body;

        if (!code || !discountValue) {
            return res.json({
                success: 0,
                message: 'Code and discountValue are required.'
            });
        }

        const couponData = {
            code,
            discountValue,
            maxDiscountAmount: maxDiscountAmount || null,
            minimumPurchaseAmount: minimumPurchaseAmount || 0,
            expirationDate: expirationDate || new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            usageLimit: usageLimit || 0,
            applicableProducts: applicableProducts || [],
            applicableCategories: applicableCategories || [],
            isActive: typeof isActive === 'boolean' ? isActive : true
        };

        const newCoupon = new Coupon(couponData);
        await newCoupon.save();

        return res.json({
            success: 1,
            message: 'Coupon created successfully.',
            result: newCoupon
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Update an existing coupon
const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedCoupon = await Coupon.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedCoupon) {
            return res.json({
                success: 0,
                message: 'Coupon not found or failed to update.'
            });
        }

        return res.json({
            success: 1,
            message: 'Coupon updated successfully.',
            result: updatedCoupon
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Delete a coupon
const Delete = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCoupon = await Coupon.findByIdAndDelete(id);

        if (!deletedCoupon) {
            return res.json({
                success: 0,
                message: 'Coupon not found or failed to delete.'
            });
        }

        return res.json({
            success: 1,
            message: 'Coupon deleted successfully.',
            result: deletedCoupon
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

module.exports = {
    GetAllCoupons,
    GetCouponById,
    Create,
    Update,
    Delete
};