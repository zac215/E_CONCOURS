
const mongoose = require('mongoose');
const Schema =mongoose.Schema
const ConcoursSchema = new Schema({
    nom: {
        type: String
    },
    questions: [{
        corps: String,
        choix: Array,
        indice_reponse: Number
    }],
    copies: [{
        nom: {
            type: String
        },
        prenom:{
            type: String
        },
        no_cnib:{
            type: String
        },
        indices_reponses: {
            type: Array
        },
        note: {
            type: Number,
            default: 0
        },
        
    }],
    corrige: {
        type: Boolean,
        default: false
    }

})

module.exports=mongoose.model("concours",ConcoursSchema);