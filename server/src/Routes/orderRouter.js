const express = require('express');
const { Create, GetOrder, UpdateOrderStatus, Delete, GetAdminOrder } = require('../Controller/orderController.js');
const VerifyJwt = require('../Middleware/authMiddleware');
const { AdminAuthJwt } = require('../Middleware/adminAuthMiddleware');
const router = express.Router()

router.route('/create').post(VerifyJwt, Create);
router.route('/:id').get(VerifyJwt, GetOrder);
router.route('/order/admin').get(AdminAuthJwt,GetAdminOrder);
router.route('/update/:id').put(AdminAuthJwt, UpdateOrderStatus);
router.route('/delete/:id').delete(VerifyJwt, Delete);

module.exports = router;