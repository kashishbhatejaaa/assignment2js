// Function to create a crafted smoothie object
function createCraftedSmoothie(ingredients) {
    return {
        ingredients: ingredients,
        getDescription: function() {
            return `Your crafted smoothie contains: ${this.ingredients.join(', ')}. Yummmmmmm!`;
        }
    };
}

document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // select ingredients
    const selectedIngredients = Array.from(document.querySelectorAll('select')).map(select => select.value);

   // create smoothie
    const CraftedSmoothie = createCraftedSmoothie(selectedIngredients);

    // smoothie description
    document.getElementById('smoothie-description').textContent = CraftedSmoothie.getDescription();
});
