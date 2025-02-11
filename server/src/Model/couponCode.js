const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        discountValue: {
            type: Number,
            required: true
        },
        maxDiscountAmount: {
            type: Number,
            default: null
        },
        minimumPurchaseAmount: {
            type: Number,
            default: 0
        },
        expirationDate: {
            type: Date,
            default: function () {
                let today = new Date();
                today.setDate(today.getDate() + 5);
                return today;
            }
        },
        usageLimit: {
            type: Number,
            default: 0
        },
        usedCount: {
            type: Number,
            default: 0
        },
        applicableProducts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }],
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;