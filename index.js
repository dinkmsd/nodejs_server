const express = require('express')
const cors = require('cors')
const route = require('./src/routers/account.js')
const route_home = require('./src/routers/home.js')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
}))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/home', route_home)
app.use('/', route)


const PORT = process.env.PORT

const listener = app.listen(PORT, () => {
    console.log('Server is running on the port ' + listener.address().port)
})
