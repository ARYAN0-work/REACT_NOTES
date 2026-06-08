// if we awant to display variables on screen 
/*
import ReactDOM from 'react-dom/client';

function App() {
    const firstName ="Joe"
    const lastName ="Schmoe"
    return (
        //<h1>Hello firstName + " " + lastName</h1> it's gonna dispalay Hello firstName + " " + lastName
        // from here jsx land starts => koi bhi js thing return kardega
        <>
           <h1>Hello {firstName} {lastName}</h1>// return Joe Schmoe
           <h1>It is a currently {new Date().getHours()}</h1>
           // return It is currnetly _jo bhi time
        </> 
        

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

*/

// in the above code logic stuff in jsx => bad so do this

/* 
import ReactDOM from 'react-dom/client';

function App() {
    const hours = new Date().getHours()
    return (
           <h1>It is a currently {hours}</h1>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

*/

// More better example => putting js into jsx
import ReactDOM from 'react-dom/client';

function App() {
    const hours = new Date().getHours()
    let timeOfDay

    /**
     * Challenge: change the hard-coded "night" to display the
     * text we determined from the logic above.
     */

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours < 21) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    return (
        <h1>Good {timeOfDay}</h1>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);



