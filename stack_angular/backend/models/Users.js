const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    }

})

module.exports = mongoose.model('Users', usersSchema)