const Inquiry = require('../Model/inquiryModel.js');


const Create = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const result = await Inquiry.create({ name, email, message });

        return res.status(201).json({
            success: 1,
            message: "Inquiry send Successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const GetInquiry = async (req, res) => {
    try {
        const result = await Inquiry.find();

        return res.status(201).json({
            success: 1,
            message: "Get all inquiry.",
            result
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}

module.exports = { Create, GetInquiry }