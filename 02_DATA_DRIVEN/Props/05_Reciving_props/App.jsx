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