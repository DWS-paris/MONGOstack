/*
Configurer le serveur
*/
    // Importer les composants
    let express = require('express');
    let bodyParser = require('body-parser');

    // Définir le port
    let port = 8080;
    
    // Initier le serveur
    let server = express();

    // Configurer le moteur de template
    server.set('view engine', 'ejs')

    // Définir les routes et les fichiers à utiliser
    server.use('/', require('./routes/front'))

    // Définir le dossier static pour les fichiers importés dans les vues
    server.use(express.static('public'))

    // Configuration de body-parser
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));




/*
Lancer le serveur
*/
    server.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );