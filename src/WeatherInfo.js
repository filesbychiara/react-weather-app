import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div>
      <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
        <div>
          <p className="FormattedDate">
            <FormattedDate date={props.data.date} />
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-4">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <WeatherIcon code={props.data.icon} size={128} />
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
