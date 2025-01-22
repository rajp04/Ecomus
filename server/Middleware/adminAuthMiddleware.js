const Admin = require('../Model/adminModel.js')
const jwt = require('jsonwebtoken')


const AdminAuthJwt = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            return res.json({
                success: 0,
                message: "Unauthorized request"
            })
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const admin = await Admin.findById(decodedToken?._id).select("-password -__v");

        if (!admin) {
            return res.json({
                success: 0,
                message: "Invaild access token"
            })
        }

        req.admin = admin;
        next();
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const Authorize = (requiredPermissions) => async (req, res, next) => {
    try {
        const admin = await Admin.findById(req.admin._id).populate('role');

        if (!admin || !admin.role) {
            return res
                .status(403)
                .json({
                    success: 0,
                    message: "Admin role not found.",
                });
        }

        const rolePermissions = admin.role.permissions || new Map();
        const hasPermission = requiredPermissions.every((permission) => {
            const [section, action] = permission.split('_');
            const sectionPermissions = rolePermissions.get(section);
            return sectionPermissions?.includes(action) || sectionPermissions?.includes('*');
        });

        if (!hasPermission) {
            return res
                .status(403)
                .json({
                    success: 0,
                    message: "You do not have the required permissions.",
                });
        }

        next();
    } catch (error) {
        return res.status(500).json({ success: 0, message: error.message });
    }
};


module.exports = { AdminAuthJwt, Authorize };