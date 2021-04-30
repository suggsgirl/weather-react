import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card w-100 this-week">
        <div className="card-body">
          <div className="row weather-forecast" id="forecast">
            <div className="col-2">
              <div className="ForecastDay">Mon</div>
              <WeatherIcon code="01d" size={60} />
              <div className="weather-forecast-temperature">
                <span className="Forecast-temp-max">15° </span> |{" "}
                <span className="Forecast-temp-min">15° </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
