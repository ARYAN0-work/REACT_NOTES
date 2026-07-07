import React from "react"
export default function App() {
    
    //const myFavoriteThings = []
    const [myFavoriteThings,setMyFacoriteThings] = React.useState([])
    const allFavoriteThings = ["💻","🌮","😺","💡☕","🔥🌿","🏀🎁","🐒","🍎🥕","📜🔔","🥩🍱"]

    const thingsElements = myFavoriteThings.map(
        thing => <p key={thing}>{thing}</p>
    )

    function addFavoriteThing() {
        setMyFavouriteThings(prevFavThing=>[...prevFavThing,allFavoriteThings[prevFavThing.length]])
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>

            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}