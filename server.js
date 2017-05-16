/*
Configurer le serveur
*/
    // Importer les composants
    let express = require('express');
    let bodyParser = require('body-parser');

    // Définir le port
    let port = 8080;
    
    // Initier le serveur
    let app = express();

    // Configurer le moteur de template
    app.set('view engine', 'ejs')




/*
Lancer le serveur
*/
    app.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );