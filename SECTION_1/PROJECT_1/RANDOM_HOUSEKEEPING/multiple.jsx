/*
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root")) 
root.render(
    <img src="react-logo.png"></img> 
    <h1></h1>
)
*/

//above comment hata k dekho => jsx should have one parent element and its true when i'm trying to render something i can't render two elemnets side by side actually above we are doing this 

/*
import { createElement } from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root")) 
root.render(
    <img src="react-logo.png"></img> 
    <h1></h1>
)

createElement()createElement()
*/

// SOLN=> just render one thing at a time i just need to make sure that its wrapped together in a parrent so in react it simpily means that if i want to have two elements i need to wrap them into a single parent elemnet that can house both of those elemenets together => saying we have a div and we're not going to woryy about props and then the children would be calling another instance of create eleemnet and this is okay to do now for accibilty reason div should probabaly the last resort use other element for better main,section 

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root")) 
root.render(
   <main>// PARENT
      <img src="react-logo.png"></img>// CHILDREN 
      <h1>This is another element</h1>// CHILDREN
   </main>
)

/**
 * any jsx inside of you dile => make sure use jsx element
 * relative/absolute path
 * use one or more than one element
 */