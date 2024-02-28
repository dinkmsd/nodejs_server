const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xuanlocok:lH0otbWNCCVTJijO@cluster0.cmpfhru.mongodb.net/?retryWrites=true&w=majority')

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: String,
    password: String
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', AccountSchema)

module.exports = AccountModel