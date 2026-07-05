export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    
    const ingredientListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))
    

    /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a
     * console.log(ingredients) after adding the ingredient, because
     * **WARNING**: you aren't going to see the page update!
     *
     * Hint: this is a one-liner solution, so don't overthink it 😄
     */

    function handleSubmit() {
        event.preventDefault() 
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient);
        console.log(ingredients);
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"// to go to url we entred | extra hai bhai
                />
                <button>Add ingredient</button>
            </form>

            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}