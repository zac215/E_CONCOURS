const { response } = require('express')
const Concours= require('../model/Concours')

//Obtenir tous les concours enregistrés
const getAll = async (req, res, next) => {
    const concours = await Concours.find().exec();
    if (!concours) return res.status(204).json({ 'message': 'Aucun concours trouvé.' });
    res.json(concours);
}
//Obtenir un concours grace a son id
const getById = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'ID du concours requis.' });

    const concours = await Concours.findOne({ _id: req.params.id }).exec();
    if (!concours) {
        return res.status(200).status(204).json({ "message": `ID ${req.params.id} incorrect` });
    }
    res.json(concours);
}
//corriger un concours grace a son id et obtenir la liste des copies ayant la moyenne
const correct = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'ID du concours requis.' });

    const concours = await Concours.findOne({ _id: req.params.id }).exec();
    if (!concours) {
        return res.status(204).json({ "message": `ID ${!req?.params?.id} incorect` });
    }

    for(var i = 0; i < concours.copies.length; i++){
        for(var j=0; j< concours.questions.length; j++){
            
            if(concours.copies[i].indices_reponses[j] ==concours.questions[j].indice_reponse){
                concours.copies[i].note++;
            }
        }
    }

    concours.corrige=true;
    const resultats = await concours.save();
    var i = concours.copies.length;
    while(i--){
        if(resultats.copies[i].note<resultats.questions.length/2){
            resultats.copies.splice(i,1);
        }
    }
    res.json(resultats.copies);
}

module.exports = {
    getAll,
    getById,
    correct
}


