const express = require('express');
const router = express.Router()
const {getAllMessages, postMessage, getSingleMessage, updateMessage, deleteMessage} = require('../controller/messageController')
// Get data from mongodb database
router.get('/', getAllMessages)

// Post data to mongodb database
router.post('/create', postMessage)

// Get single message from the database
router.get('/:id', getSingleMessage )

// Update single message from the datebase
router.put('/update/:id', updateMessage)

// Delete single message from the database
router.delete('/delete/:id', deleteMessage )

module.exports = router