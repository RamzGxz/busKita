const express = require('express')
const userCtrl = require('../controllers/userCtrl')

const userRoutes = express.Router()

userRoutes.get('/getUsers', userCtrl.getUser)
userRoutes.post('/register', userCtrl.register)
userRoutes.post('/login', userCtrl.login)
userRoutes.put('/update/:id', userCtrl.updateUsers)

module.exports = userRoutes