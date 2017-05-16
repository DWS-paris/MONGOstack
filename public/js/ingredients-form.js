$(document).ready(function(){
    
    /*
    Variables globales
    */
        let addIngredientForm = $('#addIngredientForm')
        let newIngredient = $('#newIngredient')


    /*
    Soumission du formulaire
    */
        addIngredientForm.submit( (evt) => {
            evt.preventDefault()

            // Vérifier la présence de valeur dans l'input
            if( newIngredient.val() ) {

                // Requête Ajax sur /api/ingredients
                $.ajax({
                    url: 'http://localhost:8080/api/ingredients',
                    type: 'POST',
                    dataType: 'JSON',
                    data: {title: newIngredient.val()},

                    success: (data) => window.location = 'http://localhost:8080/add-ingredient',
                    error: (err) => console.log(err)
                })
            }
        });


});