import "./App.css";
import SearchPhotos from "./SearchPhotos";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1 className="title">
        Hi, I'm Alex and I enjoy looking at cute animal pictures. What about
        you? Pictures are all from Unsplash.
      </h1>
      <SearchPhotos />
    </div>
  );
}

export default App;
