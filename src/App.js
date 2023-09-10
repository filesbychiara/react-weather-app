import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <h6>REACT WEATHER APP</h6>
      </header>
      <Weather defaultCity="London" />
      <footer>
        <h6>
          <a
            href="https://github.com/filesbychiara/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          by{" "}
          <a
            href="https://filesbychiara.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Chiara
          </a>
        </h6>
      </footer>
    </div>
  );
}

export default App;
