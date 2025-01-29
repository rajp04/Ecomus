const express = require('express');
const { Create, GetAllProducts, GetProductById, Delete, Update } = require('../Controller/productController.js');
const { upload } = require('../Middleware/multer');
const router = express.Router()

router.route('/create').post(upload.array('images'), Create)
router.route('/').get(GetAllProducts)
router.route('/:id').get(GetProductById)
router.route('/update/:id').put(upload.array('images'), Update)
router.route('/delete/:id').delete(Delete)

module.exports = router;