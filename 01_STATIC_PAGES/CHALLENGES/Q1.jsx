/**
 * Challenges: Set up a React app from Scratch again.
 * This time, try rendering an unorderd list with 2-3  list items inside
 * with why you're excited to be learning react
*/
/*
import {createRoot} from "react-dom/cliennt"
const root =createRoot(document.getElementById("root"))
// also can write like this
//createRoot(document.getElementById("root"))

//root.render(
//<ul>
//    <ol>wwe</ol>
//    <ol>wwe</ol>
//    <ol>wwe</ol>
//</ul>
//) WRONG

root.render(
<ul>
    <li>wwe</li>
    <li>wwe</li>
    <li>wwe</li>
</ul>
)
*/

// ANS
import {createRoot} from "react-dom/cliennt"
createRoot(document.getElementById("root")).render(
<ul>
    <li>wwe</li>
    <li>wwe</li>
    <li>wwe</li>
</ul>
)

