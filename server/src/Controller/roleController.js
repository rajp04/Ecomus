const Role = require('../Model/roleModel.js');


const AddRole = async (req, res) => {
    try {
        const { name, permissions } = req.body;

        const existingRole = await Role.findOne({ name });
        if (existingRole) {
            return res.status(400).json({
                success: 0,
                message: 'Role already exists.',
            });
        }

        const newRole = await Role.create({
            name,
            permissions,
        });

        return res.status(201).json({
            success: 1,
            message: 'Role added successfully.',
            role: newRole,
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
};


const GetRole = async (req, res) => {
    try {
        const result = await Role.find();
        return res.status(201).json({
            success: 1,
            message: "Get Roles Successfully",
            result
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: error.message
        })
    }
}


const UpdateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, permissions } = req.body;

        const role = await Role.findById(id);
        if (!role) {
            return res.status(404).json({
                success: 0,
                message: 'Role not found.',
            });
        }

        if (name) {
            role.name = name;
        }

        if (permissions) {
            role.permissions = permissions;
        }

        await role.save();

        return res.status(200).json({
            success: 1,
            message: 'Role updated successfully.',
            role,
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
};


const GetRoleById = async (req, res) => {
    try {

        const id = req.params.id;

        const result = await Role.findById(id);

        if (!result) {
            return res.json({
                success: 0,
                message: 'Role not found'
            })
        }

        return res.staus(201).json({
            success: 1,
            message: "Role Get Successfully.",
            result
        })
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}


module.exports = { AddRole, UpdateRole, GetRole, GetRoleById }