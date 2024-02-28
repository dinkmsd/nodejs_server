const express = require('express')
const AccountModel = require('../modules/account')

var route = express.Router()

//Get data
route.get('/', (req, res) => {
    AccountModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json('Cant get data')
        })
})

route.get('/:id', (req, res) => {
    var id = req.params.id
    AccountModel.findById(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json("Can't get data")
        })
})

//Insert data
route.post('/register', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
    })
        .then(data => {
            if (data) {
                res.json('Tai khoan da ton tai')
            } else {
                return AccountModel.create({
                    username: username,
                    password: password
                })
            }
        })
        .then(data => {
            if (data)
                res.json('Tao tai khoan thanh cong')

        })
        .catch(err => {
            console.log("Error: " + err)
            // res.status(500).json('Xay ra loi')
        })
})

route.post('/login', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
        password: password
    }).then(data => {
        if (data) {
            res.json('Dang nhap thanh cong')
        } else {
            res.json('Tai khoan khong ton tai')
        }
    }).catch(err => {
        res.json('Dang nhap khong thanh cong')
    })
})

//Update data
route.put('/:id', (req, res) => {
    var id = req.params.id
    var newPassword = req.body.newPassword
    AccountModel.findByIdAndUpdate(id, {
        password: newPassword
    })
        .then(data => { res.json('Cap nhat mat khau thanh cong') })
        .catch(err => { res.json('Cap nhat that bai') })
})


//Delete data
route.delete('/:id', (req, res) => {
    var id = req.params.id
    AccountModel.findByIdAndDelete(id)
        .then(data => {
            res.json("xoa thanh cong " + data)
        })
        .catch(err => {
            res.json("xay ra loi")
        })
})

module.exports = route