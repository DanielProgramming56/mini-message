const express = require('express')
const app = express()
const router = require('./routes/message')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
app.use(express.json())
app.use('/api/message', router);


mongoose.connect(process.env.CONNECT).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`connected to http://localhost:${process.env.PORT}`)
    })
}).catch((err) => console.log(err.message))
