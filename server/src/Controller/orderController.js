const Order = require('../Model/orderModel.js');

// Create a new order
const Create = async (req, res) => {
    try {
        const { userId, orderItems, totalPrice, address } = req.body;

        if (!userId || !orderItems || !totalPrice) {
            return res.json({
                success: 0,
                message: "Missing required fields."
            });
        }

        const newOrder = new Order({ userId, orderItems, totalPrice, address });
        const result = await newOrder.save();

        return res.json({
            success: 1,
            message: "Order created successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Get an order by ID
const GetOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Order.find({ userId: id }).populate('userId').populate('orderItems.productId').populate('address');

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
    Create, GetOrder, UpdateOrderStatus, Delete
};