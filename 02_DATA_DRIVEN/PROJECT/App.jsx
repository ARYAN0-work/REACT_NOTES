import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data";

//we are gonna faac ethis error a lot in react while wroking with array  when we are gonna take an array of data and turn into array of components or elements

// react have intresting system under the hood that it uses to keep track of what order verything is in when you give it an array of react elements ,functionalty => in order to add and remove react keeps a track of react needs this uniques key prop default its key  
export default function App(){

        const entryElements =data.map((entry)=>{
            return(
                <Entry
                // when we get data from database is the data or array of data or that array of data will usually have an ID attribute associated with it and this is actually managed by DB ensure that id unique 
                 // key={1}
                 key={entry.id}// warning gone =>use this often

                 //if array doesnt have an id -> these what people do dont doi this 

/**
 * data.map((entry,index)=>{
 * return(
 *       <Entry
 *            key={index}
 */
                  img={entry.img}
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

// now the advantage we have the display is  a fn of data we're pulling into our app this just means that if we wereto come to our data js file and lets say just copy last three items in data js then check in app you go that repeated items by just manipulating data we have xtra components in future we are gonna pull this data in from API but thats beside point at this time 