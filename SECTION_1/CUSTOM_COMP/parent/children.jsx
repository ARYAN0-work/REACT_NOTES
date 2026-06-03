/**
 * Mini Challenge:
 *
 * Move the `header` element from the Page component into
 * its own component called "Header"
 *
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))

function Page() {
    return(
        <Header>
        <h1>ITS REACT PAGE</h1>
        <ol>
          <li>MONEY</li>
        </ol>
        <footer>
            <small>© 2026 web development. All rights reserved</small>
            </footer>// ye footer vala prt bhul gye the
        </Header>
    )
}

function Header() {
    return(
         <header><img src="react-logo.png"  width="40px" alt="react-logo"></img> </header>
    )
   
}
