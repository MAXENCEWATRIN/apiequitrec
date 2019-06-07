var express = require('express');
var router = express.Router();
var model = require('../models/index');

const errHandler = (err) => {
    console.error("Error : ", err);
};

//Tous les utilisateurs
router.get('/', function(req, res, next) {
    model.utilisateur.findAll({})
        .then(utilisateurs => res.json({
            error: false,
            data: utilisateurs
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

//inscription
router.post('/inscription/:identifiant/:motdepasse/:role', (req, res) => {
    var identifiant = req.params.identifiant;
    var motDePasse = req.params.motdepasse;
    var role = req.params.role;


    model.utilisateur.findAll({where: { identifiant: identifiant, motdepasse: motDePasse }})
        .then( (result) => {
            if(result.length > 0){
                res.json({ 'response': { 'type': 'false', 'message': 'Identifiant déjà utilisé.'} });
                console.log(result.length);
                console.log(result.utilisateur);
            }else{
                model.utilisateur.create({
                    identifiant: identifiant,
                    motdepasse: motDePasse,
                    roleId: role,
                }).then(res.json({'response': { 'type': 'true', 'message': 'Utilisateur créé.' }}))
                    .catch(errHandler);
            }}).catch(errHandler);
});



//Authentification utilisateurs
router.post('/connexion/:identifiant/:motdepasse', (req, res) => {
    var identifiant = req.params.identifiant;
    var motDePasse = req.params.motdepasse;

    model.utilisateur.findAll({where: { identifiant: identifiant, motdepasse: motDePasse }})
        .then( (result) => {
            if(result.length > 0){
                res.json({ 'response': { 'type': 'true', 'message': 'utilisateur existant, connexion approuvée'} });
                console.log(res);
            }}).catch(errHandler);

});


module.exports = router;
