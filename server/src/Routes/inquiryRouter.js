const express = require('express');
const { AdminAuthJwt } = require('../Middleware/adminAuthMiddleware');
const { Create, GetInquiry } = require('../Controller/inquiryController');
const router = express.Router()

router.route('/create').post(Create)
router.route('/').get(AdminAuthJwt, GetInquiry)

module.exports = router;