const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xuanlocok:xuanlocok@cluster0.cmpfhru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: String,
    password: String
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', AccountSchema)

module.exports = AccountModel