const Address = require('../Model/addressModel.js');

// Get all addresses for a user
const GetAddress = async (req, res) => {
    try {
        const { userId } = req.params;

        const result = await Address.find({ userId }).populate('userId');

        if (!result || result.length === 0) {
            return res.json({
                success: 0,
                message: "No addresses found for this user."
            });
        }

        return res.json({
            success: 1,
            message: "Addresses retrieved successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Create a new address
const Create = async (req, res) => {
    try {
        const { userId, name, mobile, email, address, city, country, notes } = req.body;

        if (!userId || !name || !mobile || !email || !address || !city || !country) {
            return res.json({
                success: 0,
                message: "Missing required fields."
            });
        }

        const newAddress = new Address({ userId, name, mobile, email, address, city, country, notes });
        const result = await newAddress.save();

        return res.json({
            success: 1,
            message: "Address created successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Update an address
const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const result = await Address.findByIdAndUpdate(id, updates, { new: true });

        if (!result) {
            return res.json({
                success: 0,
                message: "Address not found."
            });
        }

        return res.json({
            success: 1,
            message: "Address updated successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};

// Delete an address
const Delete = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Address.findByIdAndDelete(id);

        if (!result) {
            return res.json({
                success: 0,
                message: "Address not found."
            });
        }

        return res.json({
            success: 1,
            message: "Address deleted successfully.",
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
    GetAddress, Create, Update, Delete
};