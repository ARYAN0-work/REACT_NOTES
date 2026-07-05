import ReactDOM from 'react-dom/client';

function App() {
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button>Click me</button>
    </main>
  );
}
// as a remainder it is easy to forget that we're actually inside a js file even though we're writting HTML and this jsx code that we have will be converted into a regular js object that that js object will then by turn into react be turned into an actual dom node  that diplay on page  but bcz in jsx any of attribute that we add to our react elements are going to be accessing the actualdm nodes attributes or properties and in js that accesses the document object model it does use camel casing like this thats the same reason that we're using classs name bcz class name is the actual DOM node property now i dont need to setup this as string i can set it up as a js expression -> 


<button onClick={function(){console.log("Clicked!")
}}>Click me </button>


ReactDOM.createRoot(document.getElementById('root')).render(<App />);

