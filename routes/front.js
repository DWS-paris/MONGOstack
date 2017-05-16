/*
Importer les dépendances
*/
    let express = require('express');
    let router = express.Router();


/*
Configurer MongoDB
*/
    let mongodb = require('mongodb');
    let ObjectId = mongodb.ObjectID;
    let MongoClient = mongodb.MongoClient;
    let mongodbUrl = 'mongodb://localhost:27017/recipe';




/* 
Définir la route GET '/'
=> Afficher la page d'accueil
*/
    router.get('/', (req, res, next) => {

        // Afficher la page
        res.render('pages/index')
    })





/*
Exporter le module des routes
*/
    module.exports = router;