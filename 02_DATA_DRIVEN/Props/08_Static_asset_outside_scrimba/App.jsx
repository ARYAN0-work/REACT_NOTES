import Contact from "../04_Passing_data-Component/Componenets/Contact"
import mrWhickerson from "./images/mr-whiskerson.png"
import flufflykins  from "./images/fluffykins.png"
import felix        from "./images/felix.png"  
import pumpkin      from "./images/pumpkin.png"  


function App(props) {
    return (
        <>
          <Contact
           // img="./images/mr-whiskerson.png"
           img ={mrWhickerson}
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        
        <Contact
            //img="./images/fluffykins.png"
            img={flufflykins}
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        
        <Contact
            //img="./images/felix.png"
            img ={felix}
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        
        <Contact
           // img="./images/pumpkin.png"
           img={pumpkin}
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        />
        </>
    )
}
// when you are using system like vit its going renarrage you code under the hood to make things performant and especiallu when you run final build and deployed its gonna compree the codee into single files like and relative paths not gonna work = > change 


/*
Quick Memory Trick

Absolute Path = Full address of a house.

C:\Users\Aryan\Projects\my-app\images\logo.png

Relative Path = Directions from where you're currently standing.

../images/logo.png
*/