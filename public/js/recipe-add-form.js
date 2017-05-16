$(document).ready(function(){
    
    /*
    Variables globales
    */
        let addRecipeForm = $('#addRecipeForm');
        let recipeTitle = $('#recipeTitle');
        let recipeDesc = $('#recipeDesc');
        let ingredientList = $('.checkboxIngredient');
        let newRecipe = {};
        let listOfIngredients = [];


    /*
    Soumission du formulaire
    */
        addRecipeForm.submit( (evt) => {
            evt.preventDefault()

            // Vérifier le titre
            if( recipeTitle.val() ){ newRecipe.title = recipeTitle.val() }

            // Vérifier la description
            if( recipeDesc.val() ){ newRecipe.description = recipeDesc.val() }

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
            newRecipe.ingredients = listOfIngredients;

            // Requête Ajax
            $.ajax({
                url: 'http://localhost:8080/api/recipe/',
                type: 'POST',
                dataType: 'JSON',
                data: newRecipe,

                success: (data) => console.log(data),
                error: (err) => console.log(err)
            })        
        })
});