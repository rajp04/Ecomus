const User = require('../src/Model/userModel.js')
const jwt = require('jsonwebtoken')

const VerifyJwt = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            return res.json({
                success: 0,
                message: "Unauthorized request"
            })
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -__v");

        if (!user) {
            return res.json({
                success: 0,
                message: "Invaild access token"
            })
        }

        req.user = user;
        next();
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}

module.exports = VerifyJwt;