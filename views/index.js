// loop through all the messages array and get the single value user: user, message: message, date: date
const messages = require('../messages');

const message = messages.map((data) => {
    return {message: data.text, user: data.user, date: data.added}    
})


module.exports = message;