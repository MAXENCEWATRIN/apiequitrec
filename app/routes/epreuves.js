var express = require('express');
var router = express.Router();
var model = require('../models/index');

const errHandler = (err) => {
    console.error("Error : ", err);
};

//Toutes les epreuves
router.get('/', function(req, res, next) {

    model.epreuves.findAll({})
        .then(epreuves => res.json({
            error: false,
            data: epreuves
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
//Inscription Utilisateurs
router.post('/', function(req, res, next) {

});


//trouver une epreuves par son noms
router.get('/:label', function(req, res, next) {
    var label = req.params.label;
    model.epreuves.findAll({where: { label: label}})
        .then(epreuves => res.json({
            error: false,
            data: epreuves
        }))
        .catch(error => res.json({
            error: true,
            data: [{ 'response': { 'type': 'false', 'message': 'epreuve inexistante'} }],
            error: error
        }));
});


//Authentification utilisateurs
router.post('/authentification/connexion/:identifiant/:motdepasse', (req, res) => {
    var identifiant = req.params.identifiant;
    var motDePasse = req.params.motdepasse;

    db.utilisateur.findAll({where: { identifiant: identifiant, motdepasse: motDePasse }})
        .then( (result) => {
            if(result.length > 0){
                res.json({ 'response': { 'type': 'true', 'message': 'utilisateur existant, connexion approuvée'} });
                console.log(res);
            }}).catch(errHandler);

});


module.exports = router;
