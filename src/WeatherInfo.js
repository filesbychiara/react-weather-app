import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

function WeatherInfo(props) {
  return (
    <div>
      <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
        <p className="FormattedDate">
          <FormattedDate date={props.data.date} />
        </p>

        <div className="row mt-5">
          <div className="col-4">
            <h1>{Math.round(props.data.temperature)}°C</h1>
          </div>
          <div className="col-4">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col-4 description">
            <p>{props.data.description}</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-6">
            <span>Wind: {props.data.wind} km/h</span>
          </div>
          <div className="col-6 mb-5">
            <span>Humidity: {props.data.humidity}%</span>
          </div>
        </div>
      </div>

      <div className="Forecast"></div>
    </div>
  );
}

export default WeatherInfo;
