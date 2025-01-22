const express = require('express');
const { AddRole, UpdateRole, GetRole } = require('../Controller/roleController');
const { AdminAuthJwt, Authorize } = require('../Middleware/adminAuthMiddleware');
const router = express.Router()

const role_add = 'admins_add';
const role_edit = 'admins_edit';
const role_view = 'admins_view';

router.route('/add').post(AdminAuthJwt, Authorize([role_add]), AddRole)
router.route('/').get(AdminAuthJwt, Authorize([role_view]), GetRole)
router.route('/update/:id').put(AdminAuthJwt, Authorize([role_edit]), UpdateRole)

module.exports = router;