// ? this must always be the first line, if you want to use envrionment variables.
require("dotenv").config() 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");

// const productRouter = require('./src/routes/products.routes.js')

const app = express();
// -> middelware :  mehndi, haldi, sagai, <shaadi>, vidai, shoes churai, honeymooon.


app.use(cors()); // middleware.

// CORS - Cross origin resource sharing.
// 1 girlfriend having multiple boyfriends.
// 1 boyfriend having multiple girlfriend.
// -> it enables retrival of information from req.  eg: req.params? req.body.name?
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send({
        message:"Working!!"
    })
})

// app.use('/products', productRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
       console.log(`Server Started On port http://localhost:${PORT}`)
})

mongoose.connect(process.env.DB_URI)
.then(() => {
    // console.log(`DB connected successfully.${DB_URI}`)
    console.log("mongo db is connected successfully");
}).catch(err => {
    console.error("DB connection failed.")
    console.error(err)
    process.exit(1) // kill the server
});