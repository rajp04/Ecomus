const Admin = require('../Model/adminModel.js');
const Role = require('../Model/roleModel.js')
const bcrypt = require('bcrypt')

const SetDefaultAdmin = async (req, res) => {
    try {
        const Defaultrole = await Role.findOne({ name: "Admin" })
        if (!Defaultrole) {
            Defaultrole = await Role.create({
                name: 'Admin',
                permissions: {
                    admins: ['add', 'view', 'edit', 'delete'],
                },
            })
        }

        const defaultAdmin = await Admin.findOne({ email: 'admin@ecomus.com' });
        if (!defaultAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await Admin.create({
                userName: 'admin_ecomus',
                email: 'admin@ecomus.com',
                password: hashedPassword,
                role: Defaultrole._id
            });
        }

    } catch (error) {
        console.log(error.message);
    }
}


const GetAdmin = async (req, res) => {
    try {

        const result = await Admin.find().populate('role');

        return res.status(201).json({
            success: 1,
            message: "Get Admin",
            result
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const Login = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const admin = await Admin.findOne({ $or: [{ userName }, { email }] }).populate('role');
        if (!admin) {
            return res.json({
                success: 0,
                message: "Admin not found"
            })
        }

        const isPasswordValid = await admin.isPasswordCorrect(password);

        if (!isPasswordValid) {
            return res.json({
                success: 0,
                message: "Invalid admin credentials",
            });
        }

        const token = admin.generateAccessToken();

        return res.json({
            success: 1,
            message: "Admin Created.",
            token
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const Create = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body;

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.json({
                success: 0,
                message: "Admin already exists."
            });
        }

        const result = await Admin.create({ userName, email, password, role });

        return res.status(201).json({
            success: 1,
            message: "Admin Created Successfully.",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        });
    }
};



module.exports = { SetDefaultAdmin, GetAdmin, Login, Create }