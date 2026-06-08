/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *
 *     - Think ahead: what's the problem with doing it this way?
 */

// its all hardcorded

import Contact from "../04_Passing_data-Component/Componenets/Contact"
function App() {
    return (
        <>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
        </>
    )
}
// now problem is that we are gonna get 4 Mr. whickerson see P1

// REASON ->

/*

its showing 4 Mr.Whickerson bcz we took hard-coded data and we set that as what's being returned from our contact component its like 

function addTwoTogether() {
    return 1+2
}

this fn can do only 1thing has no flexibilty to work with other numbers that we might want to add together => provide flexibilty

function addTwoTogether(a,b) {
    return a+b
}

*/

// now the quetsion how we can consume or recive the info passed into the contact component when its being rendred from App.jsx => see props-04