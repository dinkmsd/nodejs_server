const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/project-server')

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: String,
    password: String
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', AccountSchema)

module.exports = AccountModel