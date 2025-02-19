const express = require('express');
const { Create, GetCartByUser, GetCart, Delete, Update } = require('../Controller/cartController');
const VerifyJwt = require('../Middleware/authMiddleware');
const { AdminAuthJwt } = require('../Middleware/adminAuthMiddleware');
const router = express.Router()

router.route('/create').post(VerifyJwt, Create);
router.route('/:id').get(VerifyJwt, GetCartByUser);
router.route('/').get(AdminAuthJwt, GetCart);
router.route('/delete/:id').delete(VerifyJwt, Delete);
router.route('/update/:id').put(VerifyJwt, Update);

module.exports = router;