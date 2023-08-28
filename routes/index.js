const express = require('express');
const route = express.Router();
const index = require('../views/index')
const axios = require('axios');

route.get('/', (req,res) => {
    res.send('These is the main page')
})

// Get the Messages from the database
route.get('/new', (req,res) => {
    res.send('These is the new page')
})

route.post('/create', async (res, req) => {
    try {
        const {key1, key2} = req.body;

        const newDocument = new index({
            key1, key2
        })


        await newDocument.save();

        res.status(201).json({message: 'Document created successfully'});
    } catch (error) {
        console.error('Error creating document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = route;