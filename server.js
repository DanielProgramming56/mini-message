const express = require('express');
const app = express()
const dotenv = require('dotenv');
dotenv.config()
const route = require('./routes/index')
const PORT = process.env.PORT;
const messages = require('./messages')

app.use('/', route);


app.listen(PORT, () => {
    console.log(`application is running at https://localhost:${PORT}`);
});