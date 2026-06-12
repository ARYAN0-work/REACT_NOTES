export default function Joke(props) {
    return (
        <>
            <p className="setup">{props.setup}</p>
            <p className="punchline">{props.punchline}</p>
            <hr />
        </>
    )
}

// CONDITIONAL RENDERING

/*
export default function Joke(props) {
    return (
        <>
            <p className="setup">Setup: {props.setup}</p>
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}
*/

// in order to solve this replace line 17 

//{props.setup &&<p className="setup">Setup: {props.setup}</p>}

// this line is like if props.setup is a truthy valuye then i want to render this shortcut element in place of line 27

// react use plain JS under the hood there are damn too many techniques

// same soln with stylesheet

//<p style={{display:props.setup?"block":"none"}} className="setup">Setup: {props.setup}</p>

