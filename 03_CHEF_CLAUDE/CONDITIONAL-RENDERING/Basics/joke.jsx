import React from "react" 

export default function Joke(props) {
    const {isShown,setIsShown} = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown=>!prevShown)
    }
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    console.log(isShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <button onCanPlay={toggleShown}>Show button</button>
            <hr />
        </div>
    )
}