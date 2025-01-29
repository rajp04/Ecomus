const express = require('express');
const { Register, Login, GetUsers, GetUserById, Delete, Update, ForgetPassword, Subscribe } = require('../Controller/userController');
const VerifyJwt = require('../Middleware/authMiddleware');
const { AdminAuthJwt } = require('../Middleware/adminAuthMiddleware');
const router = express.Router()

router.route('/register').post(Register)
router.route('/login').post(Login)
// router.route('/').get(VerifyJwt, AdminAuthJwt, GetUsers)
router.route('/user').get(VerifyJwt, GetUserById)
router.route('/delete/:id').delete(Delete)
router.route('/update').put(VerifyJwt, Update)
router.route('/password').put(ForgetPassword)
router.route('/subscribe').post(Subscribe)
router.route('/').get((req, res, next) => {
    AdminAuthJwt(req, res, (verifyErr) => {
        if (verifyErr) {
            VerifyJwt(req, res, (adminErr) => {
                if (adminErr) {
                    return res.status(403).json({ message: 'Unauthorized access' });
                } else {
                    return GetUsers(req, res);
                }
            });
        } else {
            return GetUsers(req, res);
        }
    });
});

module.exports = router;