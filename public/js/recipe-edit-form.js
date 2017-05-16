$(document).ready(function(){
    
    /*
    Variables globales
    */
        let idRecipe = $('[type="hidden"]').val();
        let editRecipe = $('#editRecipe');
        let recipeTitle = $('#recipeTitle');
        let recipeDesc = $('#recipeDesc');
        let ingredientList = $('.checkboxIngredient');
        let usedIngredients = $('[type="checkbox"]:checked');
        let moreIngredients = $('#fromIngredientList [type="checkbox"]');
        let editedRecipe = {};
        let listOfIngredients = [];




    /*
    Gestion des listes d'ingrédients
    */
        // Boucle sur le tableau usedIngredients
        for(ingredient of usedIngredients){
            let singleUsed = $(ingredient).val();

            // Boucle sur le tableau moreIngredients
            for(moreIngredient of moreIngredients){
                let singleMore = $(moreIngredient).val()

                // Si l'ingrédient est déjà utilisé, masquer la ligne de la liste
                if(singleUsed == singleMore){
                    $(moreIngredient).parent().parent().hide()
                }
            }
        }

        




    /*
    Soumission du formulaire
    */
        editRecipe.submit( (evt) => {
            evt.preventDefault()

            // Vérifier le titre
            if( recipeTitle.val() ){ editedRecipe.title = recipeTitle.val() }

            // Vérifier la description
            if( recipeDesc.val() ){ editedRecipe.description = recipeDesc.val() }

            // Ajouter les ingrédients
            for(ingredient of ingredientList){
                
                // Vérifier si les checkbox sont checked
                if(ingredient.checked){
                    // Vérifier la valeur de l'input suivant
                    if($(ingredient).parent().next().val()){

                        // Créer un nouvel ingrédient
                        let newIngredient = { 
                            "title": $(ingredient).val(),
                            "content" : $(ingredient).parent().next().val()
                        }
                        // Ajouter le nouvel ingredient
                        listOfIngredients.push(newIngredient)
                        
                    }
                }
            }

            // Ajout de la liste d'ingrédents
            editedRecipe.ingredients = listOfIngredients;

            console.log(editedRecipe)

            // Requête Ajax
            $.ajax({
                url: 'http://localhost:8080/api/update-recipe/' + idRecipe,
                type: 'PUT',
                dataType: 'JSON',
                data: editedRecipe,

                success: (data) => window.location = 'http://localhost:8080/',
                error: (err) => console.log(err)
            })        
        })
});