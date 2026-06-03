import { Fragment } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";// built in component from react 
const root = createRoot(document.getElementById('root'))

function Page() {
    return( 
        //<Fragment>
        <>
       <header><img src="react-logo.png"  width="40px" alt="react-logo"></img> </header>
        <h1>ITS REACT PAGE</h1>
        <ol>
          <li>MONEY</li>
        </ol>
        <footer>
            <small>© 2026 web development. All rights reserved</small>
            </footer>// ye footer vala prt bhul gye the
        </>
        //</Fragment> more simpler way dont need to include library
        
    )
}

//bcz if we use div it will be like main into div like this  <div>
//               <main></main>
//         </div>  => so it will give you side effects or flexbox i mean theres a lot of stuff
