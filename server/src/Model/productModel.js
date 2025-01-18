// const mongoose = require('mongoose');

// const reviewSchema = new mongoose.Schema(
//     {
//         user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//         comment: { type: String, required: true },
//         rating: { type: Number, required: true, min: 1, max: 5 },
//     },
//     {
//         timestamps: true
//     }
// );

// const productSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true
//         },
//         description: {
//             type: String
//             , required: true
//         },
//         category: {
//             type: String,
//             required: true
//         },
//         brand: {
//             type: String,
//             required: true
//         },
//         material: {
//             type: String,
//             required: true
//         },
//         sku: {
//             type: String,
//             required: true
//         },
//         rating: {
//             type: Number,
//             required: true,
//             default: 5,
//             min: 0,
//             max: 5
//         },
//         reviews: [reviewSchema],
//         variants: [{
//             color: { type: String, required: true },
//             images: [{ type: String, required: true }],
//             size: { type: String, required: true },
//             material: { type: String },
//             price: { type: Number, required: true },
//             stock: { type: Number, required: true },
//             quantitySold: { type: Number, default: 0 },
//         }],
//     },
//     {
//         timestamps: true
//     }
// );

// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
    },
    { timestamps: true }
);

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        brand: { type: String, required: true },
        material: { type: String, required: true },
        sku: { type: String, required: true, unique: true },
        rating: { type: Number, required: true, default: 5, min: 0, max: 5 },
        totalSold: { type: Number, default: 0 },
        discount: { type: Number, default: 0, min: 0, max: 100 },
        isActive: { type: Boolean, default: false },
        tags: [{ type: String }],
        reviews: [reviewSchema],
        variants: [
            {
                variantId: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
                color: { type: String, required: true },
                images: [{ type: String, required: true }],
                size: { type: String, required: true },
                material: { type: String },
                price: { type: Number, required: true },
                stock: { type: Number, required: true },
                quantitySold: { type: Number, default: 0 },
            }
        ],
    },
    { timestamps: true }
);

// Add text index for search optimization
productSchema.index({ name: 'text', description: 'text', category: 'text' });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;