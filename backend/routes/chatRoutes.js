const express = require('express')

const chatCtrl = require('../controllers/chatCtrl')

const chatRoute = express.Router()

chatRoute.post('/chat', chatCtrl.chattings)

module.exports = chatRoute