import React, { useState, useEffect, useLayoutEffect } from "react";

import "./WeatherForecast.css";
import axios  from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";


function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect (() => {
    setLoaded(false);
    }, [props.coordinates]);
 
  function handleResponse (response){
  setForecast(response.data.daily)
  setLoaded(true);
  }

  if (loaded) {
    return (
    <div className="WeatherForecast mt-5">
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
            <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
            </div>
            );
          }
        })}         
      </div>
    </div>
  );
  } else { 
      let apiKey="203fa770242fcd2b9555d832a88ea567";
      let longitude = props.coordinates.lon;
      let latitude= props.coordinates.lat;
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
     
      axios.get(apiUrl).then(handleResponse);
      return null;
  }
}

export default WeatherForecast;
