// now if you want to nest elements together something like this <h1><span></span></h1> so do this 
// as line 9 get created jsx team created line 10


import { createElement } from "react";
import { createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))
console.log(createElement);
//const reactElement = createElement("h1",null,createElement("span",null,"I'm inside react "))
const reactElement = <h1><span>hello</span></h1>
// JSX IS SYNATXILY SUGAR => on top createElement call and under the hood react is taking this jsx syntax and turning it into calls to create element 

 root.render(
    reactElement
 )

