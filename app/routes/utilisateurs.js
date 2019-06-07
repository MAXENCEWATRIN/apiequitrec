var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET todo listing. */
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


/* POST todo. */
router.post('/', function(req, res, next) {

});


/* update todo. */
router.post('/authentification/inscription/:identifiant/:motdepasse/:role', (req, res) => {
    var identifiant = req.params.identifiant;
    var motDePasse = req.params.motdepasse;
    var role = req.params.role;


    model.utilisateur.findAll({where: { identifiant: identifiant, motdepasse: motDePasse }})
        .then( (result) => {
            if(result.length > 0){
                res.json({ 'response': { 'type': 'false', 'message': 'utilisateur existant'} });
                console.log(res);
            }else{
                model.utilisateur.create({
                    identifiant: identifiant,
                    motdepasse: motDePasse,
                    roleId: role,
                }).then(res.json({'response': { 'type': 'true', 'message': 'Utilisateur créé' }}))
                    .catch(errHandler);
            }}).catch(errHandler);
});



/* GET todo listing. */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
