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

  someElement.addEventListener("click", function () {});
//select some element | use add event listner method | this method takes tw parameter => evebt that you want to listen for like a click event and the second is a fn that should run if ever that click event ever happen on this specfic element 
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// for anothe rway see basic.html => its a bit rare