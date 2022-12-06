const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const Schema =mongoose.Schema
const concoursSchema = new Schema({
    id:{
        type: ObjectId
    },
    nom: {
        type: String
    },
    questions: {
        type: Array
    },
    fiches_candidats: {
        type: Array
    },

})