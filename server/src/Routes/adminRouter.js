const express = require('express');
const { GetAdmin, Login, Create, GetAdminById } = require('../Controller/adminController');
const { AdminAuthJwt, Authorize } = require('../Middleware/adminAuthMiddleware');
const router = express.Router();

const role_add = 'admins_add';
const role_view = 'admins_view';

router.route('/login').post(Login);
router.route('/').get(AdminAuthJwt, Authorize([role_view]), GetAdmin);
router.route('/create').post(AdminAuthJwt, Authorize([role_add]), Create);
router.route('/role').get(AdminAuthJwt, GetAdminById);

module.exports = router;