const express = require('express');
const { Create, GetReviews, Reviews } = require('../Controller/reviewController');
const router = express.Router()

router.route('/create').post(Create);
router.route('/:id').get(GetReviews);
router.route('').get(Reviews);

module.exports = router;