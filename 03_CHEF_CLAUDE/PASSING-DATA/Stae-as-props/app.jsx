import React from "react"
import Count from './Count'
export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    /**
     * State changes
      ↓
Owner component re-renders
      ↓
New props are passed to children
      ↓
Children re-render (if needed)
      ↓
UI updates
     * 
     * 
     * 
     * The golden rule of React

The component that calls useState() owns the state.

Everyone else only receives it via props.
     * 
     * 
     * One important sentence to remember

The component that calls useState() owns the state.

Children do not own that state. They only receive its current value through props.
     */
    console.log("App render");
    
    /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     */

    return (
        <main className="container">
            <div className="counter">
               <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                  >-</button>
                  
                <Count number={count} />
                  
                  <button
                      className="plus"
                      onClick={add}
                      aria-label="Increase count">
                      +
                  </button>
            </div>
        </main>
    )
}
