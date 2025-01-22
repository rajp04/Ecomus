const express = require('express');
const { Register, Login, GetUsers, GetUserById, Delete, Update, ForgetPassword } = require('../Controller/userController');
const VerifyJwt = require('../Middleware/authMiddleware');
const router = express.Router()

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/').get(VerifyJwt, GetUsers)
router.route('/user').get(VerifyJwt, GetUserById)
router.route('/delete').delete(VerifyJwt, Delete)
router.route('/update').put(VerifyJwt, Update)
router.route('/password').put(ForgetPassword)

module.exports = router;