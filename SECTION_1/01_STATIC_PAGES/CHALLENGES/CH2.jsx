/*

 * Challenge:
 * Create your very first custom React component!
 *
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 *
 * Afterward, render it on the line below MyAwesomeNavbar
 
 */
/*
function MainContent(){
    return(<h1>Reacct is Great!</h1>)
}

root.Render(
    MainContent
)
*/

// i have done 3 MISTAKES 
// line 23 and 24 and 31-33 were missing
import {createRoot} from "react-dom/client" // yha react/dom-clinet wrong
const root = createRoot(document.getElementById("root")) // yha getElementById(root)
function MainContent(){
    root(
        <h1>React is great!</h1>
    )
}
root.render(
    <MainContent/>// if we want to render two or 3 element dont use , also rember its self closing components 
)