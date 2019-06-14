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

//retrouver avec l'id
router.post('/creer/:label/:dispositif/:login/:password', function (req, res, next) {

    var label = req.params.label;
    var login = req.params.login;
    var password = req.params.password;
    var dispositif = req.params.dispositif;
    console.log('jkefbzndkslbv;zfeojgbiekzdjlkhcijrvlbioerjvlbv');
   // if(login.toString() != 'login'|| password.toString() != 'password' ) {
        console.log('hjihzeohvlciogkeho');
        model.epreuve.findAll({where: {label: label}})
            .then((result) => {
                if (result.length > 0) {
                    res.json({
                        error: false,
                        data: 'epreuve existante'
                    });
                } else {
                    model.epreuve.create({
                        label: label,
                        dispositifId: dispositif,
                    }).then(res.json({'response': {'type': 'true', 'message': 'epreuves créé.'}}))
                        .catch(errHandler);
                }
            }).catch(errHandler);
  //  }
});


module.exports = router;
