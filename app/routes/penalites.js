var express = require('express');
var router = express.Router();
var model = require('../models/index');

const errHandler = (err) => console.error("Error : ", err);;

router.get('/', function (req, res, next) {
    model.dossard.findAll({})
        .then(dossards => res.json({
            error: false,
            data: dossards
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.post('/creerdossard/:numero/:niveauid', (req, res) => {
    var numero = req.params.numero;
    var niveau = req.params.niveauid;
    model.dossard.findAll({ where: { numero: numero, niveauId: niveau } })
        .then((result) => {
            if (result.length > 0)
                res.json({ 'response': { 'type': 'false', 'message': 'Dossard déjà utilisé.' } });
            else
                model.dossard.create({
                    numero: numero,
                    niveauId: niveau
                }).then(res.json({ 'response': { 'type': 'true', 'message': 'Dossard créé.' } }))
                    .catch(errHandler);

        }).catch(errHandler);
});

module.exports = router;
