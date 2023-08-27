import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <h6>REACT WEATHER APP</h6>
      </header>
      <Weather defaultCity="Hong Kong" />
      <footer>
        <h6>
          <a href="/" target="_blank">
            Open source
          </a>{" "}
          by{" "}
          <a href="/" target="_blank">
            Chiara
          </a>
        </h6>
      </footer>
    </div>
  );
}

export default App;
