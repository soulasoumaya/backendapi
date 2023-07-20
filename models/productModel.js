const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    average: {
        required: true,
        type: Number
    },
    id: {
        required: true,
        type: Number
    },
    productor:{
        required:false,
        type:String
    },
    categ:{
        required:true,
        type:String
    },
    descreption:{
        required:false,
        type:String
    }
})

module.exports = mongoose.model('Data', movieSchema)