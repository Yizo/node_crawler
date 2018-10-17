const mongoose = require('./db')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String},
    userpwd: {type: String},
    userage: {type: Number},
    logindate: {type: Date}
})

module.exports = mongoose.model('User', UserSchema)
