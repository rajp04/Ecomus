const express = require('express');
const { Create, GetAllProducts, GetProductById, Delete, Update } = require('../Controller/productController.js');
const { upload } = require('../Middleware/multer');
const { AdminAuthJwt } = require('../Middleware/adminAuthMiddleware.js');
const router = express.Router()

router.route('/create').post(AdminAuthJwt, upload.array('images'), Create)
router.route('/admin').get(AdminAuthJwt, GetAllProducts)
router.route('/users').get(GetAllProducts)
router.route('/:id').get(GetProductById)
router.route('/update/:productId').put(AdminAuthJwt, upload.array('images'), Update)
router.route('/delete/:id').delete(AdminAuthJwt, Delete)

module.exports = router;