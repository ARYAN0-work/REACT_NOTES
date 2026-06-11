import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data";

export default function App(){

        const entryElements =data.map((entry)=>{
            return(
                // if  theres gonna be a lot of data then do this to save time we are no longer reciving img prop fro just bypassing the error you can de this entry.jsx
                // src ={props.img?.src} 
                // do console.log you will get the whole object => obbserve we are reciving an entry prop so do this
                /**
                  src={props.entry.img.src}
                   alt={props.entry.img.alt}
                   */ 
                <Entry
                 key={entry.id}
                 //object={entry}
                  enrty ={entry}
                  // now everythings broken => see console 
                />
            )
        })

    return(
        <>
          <Header/>
        </>
    )
}
