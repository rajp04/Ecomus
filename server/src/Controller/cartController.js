const Cart = require("../Model/cartModel.js")
const Product = require("../Model/productModel.js")

const Create = async (req, res) => {
    try {
        const { productId, qty } = req.body;
        const userId = req.user

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                success: 0,
                message: 'Product not found',
            });
        }

        let cart = await Cart.findOne({ userId, productId });

        if (!cart) {
            cart = new Cart({
                userId,
                productId,
                qty
            });
        } else {
            cart.qty += qty;
        }

        const updatedCart = await cart.save();


        res.json({
            success: 1,
            message: "Create Cart Successfully.",
            updatedCart
        });

    } catch (error) {
        res.status(401).json({
            success: 0,
            messsage: error.messsage
        })
    }
}


const GetCart = async (req, res) => {
    try {

        const result = await Cart.find().populate('userId').populate('productId');

        res.json({
            success: 1,
            message: "Get Cart.",
            result
        })
    } catch (error) {
        res.status(501).json({
            success: 0,
            message: error.message
        })
    }
}


const GetCartByUser = async (req, res) => {
    try {
        const id = req.user;

        const result = await Cart.find({ userId: id }).populate('productId');
        if (!result) {
            res.json({
                success: 0,
                message: "user not found"
            })
        }

        res.json({
            success: 1,
            message: "Get Cart By user",
            result
        })
    } catch (error) {
        res.status(401).json({
            success: 0,
            message: error.message
        })
    }
}


const Delete = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await Cart.findByIdAndDelete(id);

        res.json({
            success: 1,
            message: "Deleted cart item",
            result
        })

    } catch (error) {
        res.status(401).json({
            success: 0,
            message: error.message
        })
    }
}


const Update = async (req, res) => {
    try {
        const id = req.params.id;
        const { qty } = req.body;

        const result = await Cart.findById(id);

        if (!result) {
            return res.status(404).json({
                success: 0,
                message: "Cart item not found"
            });
        }

        result.qty = qty;

        const data = await result.save();

        res.json({
            success: 1,
            message: "Updated cart item",
            data
        });

    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message
        });
    }
}


const DeleteAll = async (req, res) => {
    try {

        const id = req.user

        const result = await Cart.deleteMany({ userId: id });

        res.json({
            success: 1,
            message: "Updated cart item",
            result
        });

    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message
        });
    }
}


module.exports = { Create, GetCart, GetCartByUser, Delete, Update, DeleteAll }