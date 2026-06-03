/**
 * Challenge: set up a new React app from scratch!
 * 
 * Hints:
 * 1. Need to import the method to create a new root
 *    from the "react-dom/client" package
 * 
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */

//import { createElement } from "react-dom/client";  =>  mistake

//import { createElement } from "react";  -> not needed
import { createRoot } from "react-dom/client";  // forget about the submodule and confused between line 14 and 15

const root = createRoot(document.getElementById("root"))
//const root = document.getElementById("root") -> METHOD HE NHI LAGAYA 
root.render(
    <h1>React</h1>
)

// we are using jsx extension instead of js extension intead of regular js extension i'm actually fairly certain this would work if i were to rename this to just normal js however under the hood we're using vit which we did see how to set up locally and in their documentation they suggest that if you ever have a js file in react that is using jsx in any capacity then you should use a jsx extension bcz vit provode ablity to bundle our code perfomant and just thing work smootly in the end so its now jsx 

// also in housekeeping the imange pnt -> two logos of react with static images there aren't going to be challenging or aren't coming from some kind of cdn or database there is kind of unique way to do that that you have to deal with them just do this in image,jsx