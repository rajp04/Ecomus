const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors');

dotenv.config()
const app = express()
const port = process.env.PORT || 1001
const Database = require('./src/Database/db');
const Users = require('./src/Routes/userRouter');
const Admin = require('./src/Routes/adminRouter');
const Role = require('./src/Routes/roleRouter');
const Product = require('./src/Routes/productRouter');
const { SetDefaultAdmin } = require('./src/Controller/adminController');

app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

Database();
SetDefaultAdmin()
app.use('/api/users', Users);
app.use('/api/admin', Admin);
app.use('/api/role', Role);
app.use('/api/product', Product);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})