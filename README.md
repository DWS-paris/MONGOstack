# A Tast Of Mongo

Projet réalisé dans le cadre de la mise en place d'un projet de formation à la technologie MEANstack, le principe est de mettre en place un gestionaire de recettes de cuisine. Cette application utilise les téchnologies suivantes :
- [MongoDb](https://www.mongodb.com/)
- [ExpressJs](http://expressjs.com/fr/)
- [NodeJS](https://nodejs.org/en/)
- [NodeMon](https://nodemon.io/)

<br>

> Cette application utilise des versions récentes (avril 2017) des différents frameworks, vous devez les installer ou les mettre à jour pour utiliser ce projet.

<br /><br />

<br /><br />

## Installation/Configuration

Cloner ce repo puis créer un dossier `data` pour héberger la base de données MongoDb.
```
git clone git@github.com:DWS-paris/MONGOstack.git a-tast-of-mongo

cd a-tast-of-mongo

mkdir data
```
<br />

Ouvrir une nouvelle fenêtre du terminal pour définir l'adresse de la base de données et lancer le server de base de données
```
mongod dbpath /path/to/a-tast-of-mongo/data

mongod
```
<br />

Ouvrir une nouvelle fenêtre du terminal pour lancer le shell MongoDb et créer la base de données `recipe` les collections `myRecipe` et `ingredients`
```
mongo

use recipe

db.createCollection("myRecipe")

db.createCollection("ingredients")
```
<br />

> Le serveur de base de données doit toujours rester actif, le shell ne sert qu'à créer la collection à utiliser dans l'application.
<br />

Ouvrir une nouvelle fenêtre du terminal pour lancer le serveur NodeJs de l'application : la commande `nodemon` est configurer dans le fichier `package.json` pour permettre de relancer le serveur en cas de changement.
```
cd path/to/a-tast-of-mongo

npm start
```

<br /><br />


## License

MIT © Julien Noyer [DigitalWorkshop](http://www.digitalworkshop.fr)
