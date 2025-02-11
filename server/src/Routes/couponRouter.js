const express = require('express');
const VerifyJwt = require('../Middleware/authMiddleware');
const { AdminAuthJwt } = require('../Middleware/adminAuthMiddleware');
const { Create, GetCouponById, GetAllCoupons, Delete, Update } = require('../Controller/couponController');
const router = express.Router()

router.route('/create').post(AdminAuthJwt, Create);
router.route('/').get(VerifyJwt, GetAllCoupons);
router.route('/:id').get(VerifyJwt, GetCouponById);
router.route('/update/:id').put(AdminAuthJwt, Update);
router.route('/delete/:id').delete(AdminAuthJwt, Delete);

module.exports = router;