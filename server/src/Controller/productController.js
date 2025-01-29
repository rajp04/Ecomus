const Product = require('../Model/productModel.js');
const uploadOnCloudinary = require('../Utils/cloudinary.js');


// Add products
const Create = async (req, res) => {
    try {
        let { name, description, category, brand, sku, isActive, totalSold, material, variants } = req.body;

        if (typeof variants === "string") {
            variants = JSON.parse(variants);
        }

        const productImages = [];
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const result = await uploadOnCloudinary(file.buffer, file.originalname);
                productImages.push(result.secure_url);
            }
        }

        const product = new Product({
            name,
            description,
            category,
            brand,
            sku,
            isActive,
            totalSold,
            material,
            images: productImages,
            variants,
        });

        const savedProduct = await product.save();

        res.status(201).json({
            message: "Product created successfully",
            success: 1,
            data: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

// Get all products
const GetAllProducts = async (req, res) => {
    try {

        const products = await Product.find();

        res.status(200).json({
            message: "Products fetched successfully",
            success: 1,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message
        });
    }
};

// Get a single product by ID
const GetProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                success: 0
            });
        }

        res.status(200).json({
            message: "Product fetched successfully",
            success: 1,
            data: product
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

// Update a product by ID
// const Update = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updates = req.body;

//         // Handle file upload if images are provided
//         if (req.files && req.files.length > 0) {
//             for (const variant of updates.variants) {
//                 const uploadedImages = await Promise.all(
//                     req.files.map(async (file) => {
//                         const result = await uploadOnCloudinary(file.buffer, file.originalname);
//                         return result.secure_url;
//                     })
//                 );
//                 variant.images = uploadedImages;
//             }
//         }

//         const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });

//         if (!updatedProduct) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json({ message: "Product updated successfully", data: updatedProduct });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating product", error: error.message });
//     }
// };
const Update = async (req, res) => {
    try {
        const { productId } = req.params;
        let { name, description, category, brand, sku, isActive, totalSold, material, variants } = req.body;

        if (typeof variants === "string") {
            variants = JSON.parse(variants);
        }

        const productImages = [];
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const result = await uploadOnCloudinary(file.buffer, file.originalname);
                productImages.push(result.secure_url);
            }
        }

        const updateData = {
            ...(name && { name }),
            ...(description && { description }),
            ...(category && { category }),
            ...(brand && { brand }),
            ...(sku && { sku }),
            ...(isActive !== undefined && { isActive }),
            ...(totalSold && { totalSold }),
            ...(material && { material }),
            ...(variants && { variants }),
            ...(productImages.length > 0 && { images: productImages }),
        };

        const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: 0
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            success: 1,
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};

// Delete a product by ID
const Delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: 0
            });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            success: 1,
            data: deletedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: 0
        });
    }
};


module.exports = { Create, GetAllProducts, GetProductById, Update, Delete }