// for very most basic react setup -> 2 things you needed 

// 1. Create a root 
// 2. Render to markup to the root 

import {createRoot} from "react-dom/client" // from react dom library but from a specfic sub module called client we are using this method to create root 

const root = createRoot(document.getElementById("root"))// root bcz we are going to be rendering all of our markup using react in js file we need one central loacation where react can insert all of that content => root of our app also its a dom node so i can get it by any dom node selection // Find the div with id="root" and let React control it

root.render(<h1>Hello, React</h1>)// method
// for running this you are gonna need vite project -learn later -> Now React inserts UI into that root -> React puts content inside that div
