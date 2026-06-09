import Contact from "../04_Passing_data-Component/Componenets/Contact"
function App() {
    return (
        <>
          <Contact
            img="./images/mr-whiskerson.png"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        
        <Contact
            img="./images/fluffykins.png"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        
        <Contact
            img="./images/felix.png"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        
        <Contact
            img="./images/pumpkin.png"
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        />
        </>
    )
}
// we need to pass data into our contact component otherwise we'll have to hardcode our data => reusable componet

// react also have that thing which html have -> <link> in this we can alter the behaviour of the element by passing diffrent attributes and href : its a similar way how we pass data in HTML 

/*

<link whateverIwant =""  rel="preconnect" href="https://fonts.googleapis.com">

we cant do this bcz whateverIwant isn't defined 

but we can do the above thing bcz its a custom component which is called a property[prop]

*/

// but still 404