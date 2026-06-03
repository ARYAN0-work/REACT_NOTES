/**
 * Challenge:
 *
 * Part 2:
 * - Add a `<header>` element with an `<img />` element with the image of the
 *   React logo inside (src="react-logo.png") and make sure to set the
 *   width to something more manageable so it doesn't take up the whole screen.
 *   Also, as always, you should include some alt text on the image.
 * - Add an `<h1>` with some text describing the page. (E.g. "Reasons
 *   I'm excited to learn React"). Place it above the ordered list, then wrap
 *   the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
 *   structure flowing well.
 * - Add a `<footer>` after the list that says:
 *   "© 20xx <last name here> development. All rights reserved."
 */

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))

function Page() {
    return( 
        <main>
       // <img src="react-logo.png" alt="react-logo" width="40px"></img> MISTAKE ALOS ALT AND WIDTH PLACMENT
       <header><img src="react-logo.png"  width="40px" alt="react-logo"></img> </header>
        <h1>ITS REACT PAGE</h1>
        <ol>
          <li>MONEY</li>
        </ol>
        <footer>
            <small>© 2026 web development. All rights reserved</small>
            </footer>// ye footer vala prt bhul gye the
        </main>
    )
}

// well acutally composablty incrase readibilty and shortintg use letter not writting this long codes