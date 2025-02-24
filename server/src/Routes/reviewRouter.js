const express = require('express');
const VerifyJwt = require('../Middleware/authMiddleware');
const { Create, GetReviews, Delete} = require('../Controller/reviewController');
const router = express.Router()

router.route('/create').post(Create);
router.route('/:id').get(GetReviews);
router.route('/delete/:id').delete(VerifyJwt, Delete);

module.exports = router;