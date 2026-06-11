import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data";
export default function App(){

        const entryElements =data.map((entry)=>{
            return(
                <Entry
                   //img={{
                   // src:entry.img.src,
                   // alt:entry.img.alt we can short this bit 

                  //}}
                  img={entry.img}// entry component expexting a image prop yo be an object and that object needs to have an source property or an SRC ,alt property and in our data.js img is shaped in that way => forshadowing
                   title={entry.title}
                   country={entry.country}
                   googleMapsLink={entry.googleMapsLink}
                   dates={entry.dates}
                   text={entry.text} 
                />
            )
        })

    return(
        <>
          <Header/>
        </>
    )
}

// and now our project is complete but 