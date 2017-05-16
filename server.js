// Configuration du server
    let express = require('express');
    let path = require('path');
    let bodyParser = require('body-parser');

    let front = require('./routes/front');
    let api = require('./routes/api');

    let port = 8080;
    let server = express();


// Dossier statique de la partie front
    server.use(express.static('public'))

// Configurer le moteur de template
    server.set('view engine', 'ejs'); 

// Body Parser
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));

// Définition des routes
    server.use('/', front);
    server.use('/api', api);

// Lancer le server
    server.listen(port, () => {
        console.log('Server started on port ' + port);
    });