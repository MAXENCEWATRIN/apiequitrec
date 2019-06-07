var express = require('express');
var router = express.Router();
var model = require('../models/index');

const errHandler = (err) => console.error("Error : ", err);;

router.get('/', function (req, res, next) {
    model.allure.findAll({})
        .then(allures => res.json({ error: false, data: allures }))
        .catch(error => res.json({ error: true, data: [], error: error }));
});

router.post('/creerallure/:score/:utilisateurid', (req, res) => {
    var score = req.params.score;
    var utilisateur = req.params.utilisateurid;
    console.log(utilisateur)
    model.contrat.create({
        score: score,
        utilisateurId: utilisateur
    }).then(res.json({ error: false, data: 'contrat créé.' }))
        .catch(errHandler);
});

module.exports = router;
