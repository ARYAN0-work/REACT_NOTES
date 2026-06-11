/*import {createElement} from "react"
import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(
    //<h1>hello, react</h1>
    createElement("h1",null,"Hello from createElement!")
)
*/


// it can seem strang looks like HTML directly here inside of our JS & thats true in fact when react was first introduced there was a short amount of time when this syntax didnt exist at all instead react export a fn in line 1 although conscpt is pretty same just call this 3 parameter in that 

/**
 * 1st-what type of element you want to create similar to document.createelement
 * 2nd-props [intrested in whats its going to return]
 * 3rd- what children we want our H1 to have in our case
 
 * now just manipulate the code a little bit  
 */


import {createElement} from "react"
import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))
const reactElement =createElement("h1",null,"Hello from createElement!")
console.log(reactElement);
root.render(
    reactElement 
)


// ok so it returns is an object on browsers terminal [ browser because the browser is the one executing your React JavaScript code] that has some info about DOM node that is going to get inserted by react into our actual DOM notice this object is just a regular JS object it needs to be structred in this way so react can understand 

/**
in short we are talking about JSX they created this fn called create element it still exists today as we can see we're in the version 19 as we can still use it and create element returns a regular JS object with specfic structure that makes sense to react
 */

// THE TWIST

/*
react team thought this'nt gonna be a long term soln so they created JSX which is that HTML looking thing that we saw in the begning 
*/