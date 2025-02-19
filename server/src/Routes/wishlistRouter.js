const express = require('express');
const VerifyJwt = require('../Middleware/authMiddleware');
const { AddToWishlist, RemoveFromWishlist, GetUserWishlist } = require('../Controller/wishlistController');
const router = express.Router()

router.route('/create').post(VerifyJwt, AddToWishlist);
router.route('/:id').get(VerifyJwt, GetUserWishlist);
router.route('/delete/:id').delete(VerifyJwt, RemoveFromWishlist);

module.exports = router;