var express = require('express');
var router = express.Router();
var model = require('../models/index');

const errHandler = (err) => {
    console.error("Error : ", err);
};

//Toutes les epreuves
router.get('/', function (req, res, next) {

    model.epreuve.findAll({})
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
router.post('/', function (req, res, next) {

});


//trouver une epreuves par son noms
router.get('/:label', function (req, res, next) {
    var label = req.params.label;
    model.epreuve.findAll({where: {label: label}})
        .then((result) => {
            if (result.length < 1) {
                res.json({
                    error: true,
                    data: 'Epreuve inexistante.'
                })
            }else {
                res.json({
                    error: false,
                    data: label
                })
            }}).catch(errHandler);
});
//retrouver avec l'id
router.get('/rechercheid/:id', function (req, res, next) {
    var id = req.params.id;
    model.epreuve.findAll({where: {id: id}})
        .then((result) => {
            if (result.length < 1) {
                res.json({
                    error: true,
                    data: 'Epreuve inexistante.'
                })
            }else {
                res.json({
                    error: false,
                    data: result
                })
            }}).catch(errHandler);
});



module.exports = router;
