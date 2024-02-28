const express = require('express')
const path = require('path')

const route = express.Router()

route.use('/public', express.static(path.join(__dirname, '../views/public')))

route.get('/', (req, res) =>{
    var pathFile = path.join(__dirname, '../views/home.html')
    res.sendFile(pathFile)
})

module.exports = route