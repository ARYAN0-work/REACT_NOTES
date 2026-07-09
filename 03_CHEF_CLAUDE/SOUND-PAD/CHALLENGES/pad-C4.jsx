import { React } from "react";

export default function Pad(props) {
    const [on,setOn] = React.useState(props.on)
/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */

    function toggle() {
        setOn(prevOn=>!prevOn)
    }

    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
        ></button>
    )
}

/**
 * This challenge is intentionally teaching local state, but it's not the best design for this app.

Why?

Because now there are two sources of truth:

App
pads[1].on = false

Pad 2
on = true

These can become out of sync.

That's why in the next challenge, the instructor moves the toggle logic back to App, so App becomes the single source of truth again.

This is one of the most important React concepts you'll learn: keep state in the lowest common ancestor unless a component truly owns it.
 * 
 */