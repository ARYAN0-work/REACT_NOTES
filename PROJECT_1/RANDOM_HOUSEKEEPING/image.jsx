import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root")) 
root.render(
    <img src="react-logo.png"></img> // src='relative-path'
)
/*
src is going to be string and it is going to be relative path to where you image is living i've put the react logo PNG file on the same level as my index.jsx file and so i should be able to simpily say react-logo.png is going to be starnge proportion but logo is showig correctly truth is if you download the project as zip file and run it install the dependice it would be using vit in background this would still continue to work however if you aren't really following along here in scrimba and you set up a new vit project theres a chance pputting up a relative path img src react-logo.png
woulnt work correctly so i wanted to adress that now if anybody who isnt follwing along here in scrimba the quicket way to solve is to use absolute path from your route for example if all of your code is in an SRC folder you might see /src/react-logo.png
*/
// pnt is in housekeeping theres better ways to deal with static images -> next section 

// now what if i want to render multiple elkements in render for ex try this in multiple.jsx
