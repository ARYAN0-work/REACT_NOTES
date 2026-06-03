/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById('root'))

// you forgot about writing return and pascal case
//function page() {
//    <ol>
//        <li>MONEY</li>
//    </ol>
//}

function Page() {
   return( <ol>
        <li>MONEY</li>
    </ol>
   )
}

root.render(
    <Page/>// any component can have its self closing tag => <Page><Page/>  it's also right
)