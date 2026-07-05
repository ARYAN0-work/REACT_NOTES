export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    
    const ingredientListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))
    
    function handleSubmit() {
        event.preventDefault() 
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient);
        
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