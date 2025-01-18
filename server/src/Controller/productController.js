const Product = require('../Model/productModel.js');


const Create = async (req, res) => {
    try {
        const { name, description, category, brand, material, sku, rating, reviews, variants, discount, tags, isActive, } = req.body;

        if (!name || !description || !category || !brand || !material || !sku || !variants) {
            return res.status(400).json({
                success: 0,
                message: 'Missing required fields or variants.'
            });
        }

        const newProduct = new Product({
            name,
            description,
            category,
            brand,
            material,
            sku,
            rating: rating || 5,
            reviews: reviews || [],
            variants,
            discount: discount || 0,
            tags: tags || [],
            isActive: isActive !== undefined ? isActive : true,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            success: 1,
            message: 'Product created successfully.',
            product: savedProduct,
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: 'An error occurred while adding the product.',
            error: error.message,
        });
    }
};

module.exports = { Create };