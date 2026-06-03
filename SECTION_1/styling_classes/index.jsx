/**
 * Challenge:
 *
 * Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 * "Pricing", "About", and "Contact"
 */

/*
import { createElement} from 'react-dom/client'
const root = createElement(document.getElementById('root'))
root.render(
     <>
        <nav/>
        <Contact/>
        <About/>
     </>
)

function nav() {
    return(
    <nav>Princig</nav>
    )
}

function About(){
    return(
        <ul>just practicing</ul>
    )
}

function Contact() {
    <li>Contact</li>
}
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
// we wont use class = in jsx instead we use className bcz:people think in js file word class is reserved keyword when you create a new class but nop thats not the reason we use ut bcz react is going to take these jsx elements and turn them into native dom elemenets and when we are creating a dom element like if i were to say like this const ul = documnet.createElement("ul")now in js i wanted to add class name to that   -> ul.createElement = "" set it equal to class name i wanted to have in vanila dom js theres classlist where we accesing the native dom properties of this unorderd list that i'm creating in jsx so in jsx whenever add class use className 
function Header() {
    return(
         <header><img src="react-logo.png"  width="40px" alt="react-logo"></img> 
            <nav>
                <ul className="nav-list">
                       <li>Princing</li>
                       <li>About</li>
                       <li>Contact</li> 
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
