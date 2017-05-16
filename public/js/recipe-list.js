$(document).ready(function(){
    
    /*
    Instructions pour changer de page
    */
        $('.recipeListItem').click( (evt) => {
            evt.preventDefault()
            
            // Récupération de l'ID du document
            let objectId = $(evt.currentTarget).attr('data-id');

            // Afficher la page d'édition de la recette
            window.location = 'http://localhost:8080/recipe/' + objectId;
        })
        
         
});