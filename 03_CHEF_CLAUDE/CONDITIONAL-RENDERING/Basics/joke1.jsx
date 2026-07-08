import React from "react" 

export default function Joke(props) {
    const {isShown,setIsShown} = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown=>!prevShown)
    }
    /**
     * Challenge:
     * Only display the punchline paragraph if `isShown` is true
     */
    console.log(isShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown=== true && <p>{props.punchline}</p>}
            <button onCanPlay={toggleShown}>Show button</button>
            <hr />
        </div>
    )
}

