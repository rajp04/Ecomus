const Order = require('../Model/orderModel.js');

// Add order controller
const Create = async (req, res) => {
    try {
        const id = req.user
        const { productId, quantity, priceAtOrder, color, size, discount, address } = req.body;

        if (!productId || !quantity || !priceAtOrder || !color || !size || !address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const totalPrice = priceAtOrder * quantity - discount;

        const newOrder = new Order({
            userId: id,
            productId,
            quantity,
            priceAtOrder,
            color,
            size,
            discount,
            totalPrice,
            address,
        });

        const savedOrder = await newOrder.save();

        return res.status(201).json({ message: 'Order added successfully', success: 1, order: savedOrder });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get an order by ID
const GetOrder = async (req, res) => {
    try {
        const { id } = req.user;

        const result = await Order.find({ userId: id }).populate('userId').populate('productId').populate('address');

        if (!result) {
            return res.json({
                success: 0,
                message: "Order not found."
            });
        }

        return res.json({
            success: 1,
            message: "Order retrieved successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};


const GetAdminOrder = async (req, res) => {
    try {

        const result = await Order.find().populate('userId').populate('productId').populate('address');

        if (!result) {
            return res.json({
                success: 0,
                message: "Order not found."
            });
        }

        return res.json({
            success: 1,
            message: "Order retrieved successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Update the status of an order
const UpdateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { orderStatus } = req.body;

        // if (!['Pending', 'Shipped', 'Delivered', 'Cancelled'].includes(orderStatus)) {
        //     return res.json({
        //         success: 0,
        //         message: "Invalid order status."
        //     });
        // }

        const result = await Order.findByIdAndUpdate(
            id,
            { orderStatus },
            { new: true }
        );

        if (!result) {
            return res.json({
                success: 0,
                message: "Order not found."
            });
        }

        return res.json({
            success: 1,
            message: "Order status updated successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Delete an order by ID
const Delete = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Order.findByIdAndDelete(id);

        if (!result) {
            return res.json({
                success: 0,
                message: "Order not found."
            });
        }

        return res.json({
            success: 1,
            message: "Order deleted successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

module.exports = {
    Create, GetOrder, GetAdminOrder, UpdateOrderStatus, Delete
};