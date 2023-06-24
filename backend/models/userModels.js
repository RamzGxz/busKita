const mongoose = require('mongoose')

const userSchemma = new mongoose.Schema({
    email :{
        required: true,
        type: String
    },
    password :{
        required: true,
        type: String
    },
    namaDepan :{
        required: true,
        type: String
    },
    namaBelakang :{
        required: true,
        type: String
    },
    noHP:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Users', userSchemma, 'users')