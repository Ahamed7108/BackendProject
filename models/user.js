const mongoose = require('mongoose')


const AlienSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    

})

module.exports = mongoose.model('Alien',AlienSchema)