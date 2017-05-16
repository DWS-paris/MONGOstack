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
Définir la route POST '/api/ingredients' 
=> Ajouter un ingrédient
*/
    router.post('/ingredients', (req, res, next) => {

        // Connexion à MongoDb
        MongoClient.connect(mongodbUrl, (err, db) => {

            // Tester la connection
            if(err) { res.send(err) }
            else{
                // Ajouter un document dans la colletion ingredients
                db.collection('ingredients').insert(req.body, (err, data) => {
                    // Vérification de a commande MongoDb
                    if(err){  res.send(err) } 
                    else{ res.send(data) }
                })
            }

            // Fermer la connexion
            db.close();
        })    
    })


/*
Définir la route DELETE '/api/ingredients' 
=> Ajouter un ingrédient
*/
    router.delete('/ingredients', (req, res, next) => {

        // Connexion à MongoDb
        MongoClient.connect(mongodbUrl, (err, db) => {

            // Tester la connection
            if(err) { res.send(err) }
            else{
                // Ajouter un document dans la colletion ingredients
                db.collection('ingredients').remove({ _id: new ObjectId(req.body.id) }, (err, data) => {
                    // Vérification de a commande MongoDb
                    if(err){  res.send(err) } 
                    else{ res.send(data) }
                })
            }

            // Fermer la connexion
            db.close();
        })    
    })



/*
Définir la route POST '/api/recipe' 
=> Ajouter une recette
*/
    router.post('/recipe', (req, res, next) => {

        // Connexion à MongoDb
        MongoClient.connect(mongodbUrl, (err, db) => {

            // Tester la connection
            if(err) { res.send(err) } 
            else{
                // Ajouter un document dans la colletion myRecipe
                db.collection('myRecipe').insert(req.body, (err, data) => {
                    // Vérification de a commande MongoDb
                    if(err){  res.send(err) } 
                    else{ res.send(data) }
                })
            }

            // Fermer la connexion
            db.close()
        })    
    })




/*
Définir la route POST '/api/recipe' 
=> Ajouter une recette
*/
    router.put('/update-recipe/:id', (req, res, next) => {

        // Récupérer les données de la requête
        let editedRecipe = req.body;

        // Connexion à MongoDb
        MongoClient.connect(mongodbUrl, (err, db) => {

            // Tester la connection
            if(err) { res.send(err) } 
            else{
                db.collection('myRecipe').update({ _id: new ObjectId(req.params.id) }, editedRecipe, (err, data) => {
                    if(err){  res.send(err) } 
                    else{ res.send(data) }
                })
            }

            // Fermer la connexion
            db.close()
        })
    })





/*
Exporter le module des routes
*/
    module.exports = router;