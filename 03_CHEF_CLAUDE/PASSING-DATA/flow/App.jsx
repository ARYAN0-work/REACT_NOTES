import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    const [userName, setUserName] = React.useState("Joe")
    
    return (
        <main>
            <Header userName={userName} />
            <Body   userName={userName}  />
        </main>
    )
}
/**
 * Rule to remember

If multiple components need the same state, move that state to their closest common parent and pass it down as props.

This pattern is called lifting state up, and it's one of the most common patterns you'll use in React.
 */