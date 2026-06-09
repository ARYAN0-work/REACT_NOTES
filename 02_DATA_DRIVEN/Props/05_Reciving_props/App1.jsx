import Contact from "../04_Passing_data-Component/Componenets/Contact"
function App(props) {
    console.log(props);// you will get 4 objects=>this contact component is being excuted and bcz it's happening 4 times it's being exctued 4 times 
    
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
// in last we learn pass our own custom data into components that we're creating now use parameter

/*
{
            img="./images/mr-whiskerson.png"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"

            props iz regular js object wherre it got props that map to values that we passed in our  app component; we can choose the names of these props means we can change ex:- img to image
}
*/