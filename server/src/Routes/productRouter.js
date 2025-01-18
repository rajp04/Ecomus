const express = require('express');
const { Create } = require('../Controller/productController');
const router = express.Router()

router.route('/create').post(Create)

module.exports = router;