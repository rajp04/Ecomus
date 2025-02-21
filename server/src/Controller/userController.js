const User = require('../Model/userModel.js')
const bcrypt = require('bcrypt')

const Register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.json({
                success: 0,
                message: 'User already exist'
            })
        }

        const result = await User.create({ firstName, lastName, email, password });

        return res.status(201).json({
            success: 1,
            message: "User Created Successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                success: 0,
                message: "User not found."
            })
        }

        const isPasswordValid = await user.isPasswordCorrect(password);

        if (!isPasswordValid) {
            return res.json({
                success: 0,
                message: "Invalid user credentials.",
            });
        }

        const token = await user.generateAccessToken();

        const loggedInUser = await User.findById(user._id).select("-password -__v");

        return res
            .status(201)
            .json({
                success: 1,
                message: "User logged successfully",
                loggedInUser,
                token
            });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const GetUsers = async (req, res) => {
    try {
        const result = await User.find();

        return res.status(201).json({
            success: 1,
            message: "Get all users.",
            result
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const GetUserById = async (req, res) => {
    try {
        const id = req.user?._id;

        const result = await User.findById(id);

        if (!result) {
            return res.json({
                success: 0,
                message: 'User not found'
            })
        }

        return res.status(201).json({
            success: 1,
            message: "Get user successfully.",
            result
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const Delete = async (req, res) => {
    try {
        const id = req.params.id;

        await User.findByIdAndDelete(id);

        return res.status(201).json({
            success: 1,
            message: "User Deleted successfully.",
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const Update = async (req, res) => {
    try {
        const { firstName, lastName, email, currentPassword, newPassword } = req.body;
        const id = req.user?._id;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: 0,
                message: "User not found",
            });
        }

        let updates = { firstName, lastName, email };

        if (newPassword) {
            if (!currentPassword) {
                return res.status(400).json({
                    success: 0,
                    message: "Current password is required to change password.",
                });
            }

            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    success: 0,
                    message: "Current password is incorrect.",
                });
            }

            const isSamePassword = await bcrypt.compare(newPassword, user.password);
            if (isSamePassword) {
                return res.status(400).json({
                    success: 0,
                    message: "New password cannot be the same as the current password.",
                });
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);
            updates.password = hashedPassword;
        }

        const result = await User.findByIdAndUpdate(id, updates, { new: true }).select('-password');

        return res.status(200).json({
            success: 1,
            message: "User updated successfully.",
            user: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
};


const ForgetPassword = async (req, res) => {
    try {

        const { email, password } = req.body;

        const existingEmail = await User.findOneAndUpdate(email, { password }, { new: true });
        if (!existingEmail) {
            return res.json({
                success: 0,
                message: "Email id not found."
            })
        }

        return res.json({
            success: 1,
            message: "Password reset successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const Subscribe = async (req, res) => {
    try {

        const { email } = req.body;

        const result = await User.create({ email })

        return res.json({
            success: 1,
            message: "Email Subscribe.",
            result
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}

module.exports = { Register, Login, GetUsers, GetUserById, Delete, Update, ForgetPassword, Subscribe }