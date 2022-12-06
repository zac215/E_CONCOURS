const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const Schema =mongoose.Schema
const concoursSchema = new Schema({
    nom: {
        type: String
    },
    prenom:{
        type: String
    },
    no_cnib:{
        type: String
    },
    reponses: {
        type: Array
    }

})