$(document).ready(function(){
    
    /*
    Instructions pour changer de page
    */
        $('.recipeListItem').click( (evt) => {
            evt.preventDefault()
            let objectId = $(evt.currentTarget).attr('data-id')
            
            window.location = 'http://localhost:8080/recipe/' + objectId;
        })
        
});