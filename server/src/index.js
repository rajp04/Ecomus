const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors');

dotenv.config()
const app = express()
const port = process.env.PORT || 1001
const Database = require('./Database/db');
const Users = require('./Routes/userRouter');
const Admin = require('./Routes/adminRouter');
const Role = require('./Routes/roleRouter');
const Product = require('./Routes/productRouter');
const Inquiry = require('./Routes/inquiryRouter');
const { SetDefaultAdmin } = require('./Controller/adminController');
const Cart = require('./Routes/cartRouter');
const Order = require('./Routes/orderRouter');
const Address = require('./Routes/addressRouter');
const Coupon = require('./Routes/couponRouter');
const Wishlist = require('./Routes/wishlistRouter');
const Review = require('./Routes/reviewRouter');

app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

Database();
SetDefaultAdmin()
app.use('/api/users', Users);
app.use('/api/admin', Admin);
app.use('/api/role', Role);
app.use('/api/product', Product);
app.use('/api/inquiry', Inquiry);
app.use('/api/cart', Cart);
app.use('/api/order', Order);
app.use('/api/address', Address);
app.use('/api/coupon', Coupon);
app.use('/api/wishlist', Wishlist);
app.use('/api/review', Review);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})