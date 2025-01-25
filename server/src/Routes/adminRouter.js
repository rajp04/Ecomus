const express = require('express');
const { GetAdmin, Login, Create, GetAdminById, Update } = require('../Controller/adminController');
const { AdminAuthJwt, Authorize } = require('../Middleware/adminAuthMiddleware');
const router = express.Router();

const role_add = 'role_add';
const role_view = 'role_view';
const role_edit = 'role_edit';

router.route('/login').post(Login);
router.route('/').get(AdminAuthJwt, GetAdmin);
router.route('/create').post(AdminAuthJwt, Authorize([role_add]), Create);
router.route('/role').get(AdminAuthJwt, GetAdminById);
router.route('/update/:id').put(AdminAuthJwt, Authorize([role_edit]), Update);

module.exports = router;