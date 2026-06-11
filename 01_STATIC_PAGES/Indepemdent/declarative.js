// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )

/*
Challenge - recreate the above line of code in vanilla JS by creating and 
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Dont't use innerHTML to accomplish any of this using inner HTML // bcz its a little of shaddy 
*/

const h1 = document.createElement("h1")
h1.textContent ="Hello, React!" // NOW THIS BECOMES => <h1>Hello, React!</h1>
h1.className ="header"//NOW THIS BECOMES =><h1 class="header">Hello, React!</h1>
document.createElementById("root").appendChild(h1)

// this will work for sure
/*
Here:

1. .document = the webpage
2. .createElement() = make a new HTML element
3. "h1" = the type of element we want 
*/


// now the context :IMPRETAIVE CODING => AS HEADER SAYS AND ITS BCZ WE'VE HAD TO MANUALLY TELL IT EVERY SINGLE STEP OF THE WAY FIRST CREATE A NEW ELEMENT THEN MANUALLY ADD THIS TEXT CONTENT TO IT THEN ADD A CLASS NAME TO IT IT AND EACH ONE OF THESE HAS TO BE ON ITS WON LINE OF CODE THEN TAKE THEN THIS NEW H1 CHILD THAT WE HAVE SLOWLY BUILT UP OVER TIME APPEND IT .... => WE HYAVE TO TELL EVERY STEP OF THE WAY WHAT TO DO THE WAY THAT WE HAVE JUST SEEN HOW WE HAVE DO IT IN REACT 

// DECLARATIVE EX


//root.render(
//    <h1>Hello, React!</h1>
//)
// HI react i'm going to let you figure out how you should really turn this into text node inside of an H1 element  like 


root.render(
    <h1 className="header">Hello, React!</h1>
)
// now react is gonna figure out how it gonna do this  

