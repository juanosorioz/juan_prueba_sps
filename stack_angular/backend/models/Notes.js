const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        default: Date.now(),
    }

})

module.exports = mongoose.model('Notes', notesSchema)