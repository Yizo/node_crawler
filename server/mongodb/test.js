const User = require('./user.js')

export function insert() {
    const user = new User({
        username: 'Tracy McGrady',
        userpwd: 'adcd',
        userage: 37,
        logindate: new Date()
    })
    user.save((err, res) => {
        if (err) {
            console.log("Error:" + err)
        } else {
            console.log("Res:" + res)
        }
    })
}

export function update() {
    const wherestr = {
        'username': 'Tracy McGrady'
    }
    const updatestr = {
        'userpwd': 'zzzz'
    }
    User.update(wherestr, updatestr, (err, res) => {
        if (err) {
            console.log("Error:" + err)
        } else {
            console.log("Res:" + res)
        }
    })
}

export function select() {
    return new Promise((resolve, reject) => {
        User.find({}, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }       
        })                   
    })    
}