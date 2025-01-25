const express = require('express');
const { AddRole, UpdateRole, GetRole, GetRoleById } = require('../Controller/roleController');
const { AdminAuthJwt, Authorize } = require('../Middleware/adminAuthMiddleware');
const router = express.Router()

const role_add = 'role_add';
const role_edit = 'role_edit';
const role_view = 'role_view';

router.route('/add').post(AdminAuthJwt, Authorize([role_add]), AddRole)
router.route('/').get(AdminAuthJwt, GetRole)
router.route('/update/:id').put(AdminAuthJwt, Authorize([role_edit]), UpdateRole)
router.route('/:id').put(AdminAuthJwt, GetRoleById)

module.exports = router;