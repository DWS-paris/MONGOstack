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


    /*
    Instructions pour supprimer un ingrédient
    */
        $('button.callToAction').click( (evt) => {

            let objectId = $(evt.currentTarget).attr('data-id');


            // Requête Ajax
            $.ajax({
                url: 'http://localhost:8080/api/ingredients/',
                type: 'DELETE',
                dataType: 'JSON',
                data: {id: objectId},

                success: (data) => window.location = 'http://localhost:8080/add-ingredient/',
                error: (err) => console.log(err)
            })

        })
        
         
});