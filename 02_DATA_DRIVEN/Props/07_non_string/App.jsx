/**
 * Challenge: Think critically - how would you pass in a prop that
 * isn't a string datatype.
 *
 * E.g. Say you want each Joke component to receive an "upvotes"
 * and "downvotes" prop that is a number, as well as a prop with
 * an array of comments, and a boolean of whether the joke is a
 * pun (`isPun`).
 */  


import Joke from "./Joke"

export default function App() {
    return (
        <main>
            <Joke
                Punchline= "I can't wait to see her face light up when she opens it." 
                upvotes ={10}
                isPun ={true}
                // js expression inside of that expression => new array
                comments = {[
                    {author:"",text:"",tittle:""}
                ]}
            />
            <Joke
               Setup= "How did the hacker escape the police?"
               Punchline= "He just ransomware!"
               isPun = {true}
            />
            <Joke
               
               Setup= "Why don't pirates travel on mountain roads?"
               Punchline= "Scurvy"
               isPun = {true}
            />
            <Joke          
               Setup= "Why do bees stay in the hive in the winter?"
               Punchline= "Swarm."
               isPun = {true}
            />
            <Joke 
               Setup= "What's the best thing about Switzerland?"
               Punchline= "I don't know, but the flag is a big plus!"
               isPun = {true}
            />
        </main>
    )
}