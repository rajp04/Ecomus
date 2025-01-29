const express = require('express');
const { Register, Login, GetUsers, GetUserById, Delete, Update, ForgetPassword, Subscribe } = require('../Controller/userController');
const VerifyJwt = require('../Middleware/authMiddleware');
const { AdminAuthJwt } = require('../Middleware/adminAuthMiddleware');
const router = express.Router()

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/').get(AdminAuthJwt, GetUsers)
router.route('/user').get(VerifyJwt, GetUserById)
router.route('/delete/:id').delete(VerifyJwt, Delete)
router.route('/admin/delete/:id').delete(AdminAuthJwt, Delete)
router.route('/update').put(VerifyJwt, Update)
router.route('/password').put(ForgetPassword)
router.route('/subscribe').post(Subscribe)


module.exports = router;