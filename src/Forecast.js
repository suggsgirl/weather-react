import React from "react";

export default function Forecast() {
  return (
    <div className="card w-100 this-week">
      <div className="card-body">
        <div className="row weather-forecast" id="forecast">
          <div className="col-2">
            <h3>16:00</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Cloudy"
            />
            <div className="weather-forecast-temperature">
              <strong>15° </strong> | 15°
            </div>
          </div>
          <div className="col-2">
            <h3>19:00</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Cloudy"
            />
            <div className="weather-forecast-temperature">
              <strong>15° </strong> | 15°
            </div>
          </div>
          <div className="col-2">
            <h3>22:00</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Cloudy"
            />
            <div className="weather-forecast-temperature">
              <strong>15° </strong> | 15°
            </div>
          </div>
          <div className="col-2">
            <h3>01:00</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Cloudy"
            />
            <div className="weather-forecast-temperature">
              <strong>15° </strong> | 15°
            </div>
          </div>
          <div className="col-2">
            <h3>04:00</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Cloudy"
            />
            <div className="weather-forecast-temperature">
              <strong>15° </strong> | 15°
            </div>
          </div>
          <div className="col-2">
            <h3>07:00</h3>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Cloudy"
            />
            <div className="weather-forecast-temperature">
              <strong>15° </strong> | 15°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
