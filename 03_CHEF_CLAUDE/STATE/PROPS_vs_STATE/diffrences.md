REACT PROPS

Props refers to the properties being passed
into a component in order for it to work
correctly, similar to how a function receives
parameters: "from above." A component
receiving props is not allowed to modify
those props. (I.e. they are "immutable or unchangable")

function addTwoNumbers(a,b){ // for props these values are immutable
    this fn is only useful when we pass some parameters
}

console.log(addTwoNumbers(1,2))  => CONCLUSION


function addTwoNumbers(a, b) { this needs to be immutable
    // DON'T DO THIS 
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))


CONSOLE
44


function Navbar(props) {
    // DON'T DO THIS!
    props.logoIcon = "some-other-icon.png"
}

<Navbar logoIcon="spatula.png" />

REACT STATE

State refers to values that are managed by
the component, similar to variables
declared inside a function. Any time you
have changing values that should be
saved/displayed, you'll likely be using state.

# View as a function of state

## 01. Render

React runs your function and displays whatever gets returned.

The function will only be run again if:

- It receives new props from above, or
- Its internal state values change.

---

## 02. setState

Changing a local, non-state variable doesn't cause React to re-render the component.

Changing state with React's built-in `setState` function **does**.

---

## 03. view = function(state)

When state changes, React re-runs (re-renders) your component.

The component returns new UI, and React replaces what used to be on the page with the updated view.