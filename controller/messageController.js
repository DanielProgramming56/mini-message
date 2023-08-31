const { default: mongoose } = require('mongoose')
const messageScheme = require('../model/message')
const getAllMessages = async (req, res) => {
    try {
        const getmessages = await messageScheme.find({}).sort({createdAt: -1})
        res.status(200).json({getmessages})
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const postMessage = async (req, res) => {

    const {text, user} = req.body;
    try {
        const createUser = await messageScheme.create({text, user})
        res.status(200).json({createUser})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getSingleMessage = async (req, res) => {
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No Such Workout'})
        }
        const getSingleMeg = await messageScheme.findById({_id: id})
        res.status(200).json({getSingleMeg})
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const updateMessage = async (req, res) => {
    try {
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No Such Workout'})
        }
        const updateMesg = await messageScheme.findOneAndUpdate({_id: id}, {...req.body})
        res.status(200).json({updateMesg});
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteMessage = async (req, res) => {
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No Such Workout'})
        }
        const deleteData = await messageScheme.findByIdAndDelete({_id: id})
        res.status(200).json({message: "Deleted message"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = {
    getAllMessages,
    postMessage,
    getSingleMessage,
    updateMessage,
    deleteMessage
}