const express = require('express');
const VerifyJwt = require('../Middleware/authMiddleware');
const { Create, GetAddress, Update, Delete } = require('../Controller/addressController');
const router = express.Router()

router.route('/create').post(VerifyJwt, Create);
router.route('/:userId').get(VerifyJwt, GetAddress);
router.route('/update/:id').put(VerifyJwt, Update);
router.route('/delete/:id').delete(VerifyJwt, Delete);

module.exports = router;