const mongoose = require('mongoose')
const db_url = 'mongodb://localhost:27017/blog'
mongoose.connect(db_url)

mongoose.connection.on('error', (err) => {
    console.log("连接失败")
})
mongoose.connection.on('connected', () => {
    console.log("连接成功")
})
mongoose.connection.on('disconnected', ()=>{
    console.log("连接断开")
})

module.exports = mongoose