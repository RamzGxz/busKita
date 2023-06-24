const userModels = require('../models/userModels')

module.exports = {
    getUser: async (req, res) => {
        try {
            const data = await userModels.find()
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    },

    login: async (req, res) => {
        const email = req.body.email
        const password = req.body.password

        try {
            const data = await userModels.find({ email: email, password: password })
            if (data.length > 0) {
                res.status(200).json({
                    message: 'data found! login success!',
                    data: data
                })
            } else {
                res.json({
                    message: 'wrong email or password!, please try again'
                })
            }
        } catch (error) {
            res.status(500).send(error)
            console.log(error)
        }
    },

    register: async (req, res) => {
        const data = new userModels({
            email: req.body.email,
            password: req.body.password,
            namaDepan: req.body.namaDepan,
            namaBelakang: req.body.namaBelakang,
            noHP: req.body.noHP
        })
        try {
            const savedData = await data.save()
            res.json({
                message: 'register has been succesfull',
                data: savedData
            })
        } catch (error) {
            console.log(error)
        }
    },
    updateUsers: async (req, res) => {
        const data = {
            email: req.body.email,
            password: req.body.password,
            namaDepan: req.body.namaDepan,
            namaBelakang: req.body.namaBelakang,
            noHP: req.body.noHP
        }

        try {
            const resp = await userModels.updateOne({_id: req.params.id}, data)
            const findData = await userModels.find({_id: req.params.id})
            
            if(resp.matchedCount === 1){
                res.json({
                    message: 'data has been updated!',
                    data: findData
                })
            } else{
                res.json({
                    message: 'data not found!'
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}