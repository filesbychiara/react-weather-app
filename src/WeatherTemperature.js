import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit (){
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="WeatherTemperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C {" "}
          <a href="/" onClick={showFahrenheit}>
          | °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="WeatherTemperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="unit">
           °F {" "}
          <a href="/" onClick={showCelsius}>
            | °C 
          </a>{" "}
        </span>
      </div>
    );
  }
}
export default WeatherTemperature;
