export default function App() {
  let state = "Yes"
  state = "Heck yes"

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">{state}</button>
    </main>
  )
}

// problem comes when when a response to a user interaction i try to change the state for ex if i try to do this but nothings gonna change in app1.jsx
