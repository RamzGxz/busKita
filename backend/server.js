const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const chatRoute = require('./routes/chatRoutes')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/bus-kita', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error: '))
db.once('open', ()=>{
    console.log('database connected!')
})

app.use(userRoutes)
app.use(chatRoute)


app.listen(port, () => console.log(`app listed on http://localhost:${port}/`))