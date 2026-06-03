/**
 * Challenge:
 *
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
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
         <header className="header">
            <img src="react-logo.png"  width="40px"className="nav-logo" alt="react-logo"></img> 
            <nav>
                <ul className="nav-list">
                       <li className="nav-list-items">Princing</li>
                       <li className="nav-list-items">About</li>
                       <li className="nav-list-items">Contact</li> 
                </ul>
            </nav>
         
         </header>
    )
   
}

function Footer() {
    return(
        <footer>
            <small>© 2026 web development. All rights reserved</small>
            </footer>
    )
}
