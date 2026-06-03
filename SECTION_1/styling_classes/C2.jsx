/**
 * Challenge:
 *
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 *
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
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
            <img src="react-logo.png"  width="40px" alt="react-logo"></img> 
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
