export default function App() {

    /**
     * Challenge: See if you can correctly pass the necessary props to the
     * Joke component in the .map() (and render the jokeElements array) so
     * the jokes show up on the page again
     */

    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.question} punchline ={joke.punchline}/>
    })

    return (
        <main>
               {jokeElements}
        </main>
    )
}