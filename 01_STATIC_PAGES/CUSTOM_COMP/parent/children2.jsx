/** Challenge:
 * Move the `main` element into its own component called "MainContent"
 * and render that component inside the Page component.
 *
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
 */


import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))

function Page() {
    return(
        <>
        <MainContent/>
        <Footer/>
        <Header/>
        </>
    )
}

function MainContent(){
    return(
         <main>
        <h1>ITS REACT PAGE</h1>
        <ol>
          <li>MONEY</li>
        </ol>
        </main>
    )
}

function Header() {
    return(
         <header><img src="react-logo.png"  width="40px" alt="react-logo"></img> </header>
    )
   
}

function Footer() {
    return(
        <footer>
            <small>© 2026 web development. All rights reserved</small>
            </footer>
    )
}

// howerver in most of the cases this diesnt work seprate header footer component and then probably quite a but more than just a single main content component that contains the main portion of you site ,terminology of parent and child => its a heirachy where we have a page component and that page component whoch we're rendering right here will on oits own render a header component and the other two components and typically in a larger react app this will continue on down the tree where for ex the main content componet might be rendering other custom components and those ones will probably be renderoing other custom components creating this tree hierarchy which results in what we call parent components and child components and the anology goes upto grandchild compinents which give us a epic custom componet 