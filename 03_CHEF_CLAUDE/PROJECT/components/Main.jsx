export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    
    const ingredientListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))
    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */

    function handleSubmit() {
        event.preventDefault() // in order to prevent url change in modern react
        console.log("form submitted!");
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