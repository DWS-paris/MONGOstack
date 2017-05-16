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

        // Connexion à MongoDb
        MongoClient.connect(mongodbUrl, (err, db) => {

            // Tester la connection
            if(err) { res.send(err) } 
            else{
                // Afficher les documents de la colletion myRecipe
                db.collection('myRecipe').find().toArray((err, recipes) => {
                    // Tester la commande MongoDb
                    if(err){ res.send(err) }
                    else{ 
                        // Envoyer les données au format json
                        res.render('pages/index', {recipeList : recipes})
                    }
                })
            }

            // Fermer la connexion
            db.close();
        })
    })




/* 
Définir la route GET '/add-recipe' 
=> Afficher la page pour ajouter une recette 
*/
    router.get('/add-recipe', (req, res, next) => {

        // Connexion à MongoDb
        MongoClient.connect(mongodbUrl, (err, db) => {

            // Tester la connection
            if(err) { res.send(err) } 
            else{
                // Afficher les documents de la colletion ingredients
                db.collection('ingredients').find().toArray((err, ingredinets) => {
                    // Tester la commande MongoDb
                    if(err){ res.send(err) }
                    else{ 
                        // Envoyer les données au format json
                        res.render('pages/add-recipe', {data : ingredinets})
                    }
                })
            }

            // Fermer la connexion
            db.close();
        })
    })





/*
Exporter le module des routes
*/
    module.exports = router;