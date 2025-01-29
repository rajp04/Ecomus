const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        sku: {
            type: String,
            required: true,
            unique: true
        },
        isActive: {
            type: Boolean,
            default: false
        },
        totalSold: {
            type: Number,
            default: 0
        },
        images: [{
            type: String,
            required: true
        }],
        material: {
            type: String,
            required: true
        },
        variants: [
            {
                color: {
                    type: String,
                    required: true
                },
                size: [{
                    type: String,
                    required: true
                }],
                price: {
                    type: Number,
                    required: true
                },
                discount: {
                    type: Number,
                    default: 0
                },
                stock: {
                    type: Number,
                    required: true
                }
            }
        ],
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;