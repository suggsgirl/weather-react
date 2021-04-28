import React from "react";
import FormattedDate from "./FormattedDate"; 

export default function WeatherInfo(props) {
    return (
      <div className="card w-100 today">
        <div className="card-body">
          <h1>
            {" "}
            <i className="fas fa-map-marker-alt"></i>{" "}
            <span>{props.data.city}</span>{" "}
          </h1>

          <h3>
            <i className="far fa-clock"></i>{" "}
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </h3>
          <div className="row">
            <div className="col-7">
              <div className="clearfix weather-temperature">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt="Cloudy"
                  id="icon"
                  class="float-left"
                />
                <div className="float-left">
                  <span class="temperature" id="showTemperature">
                    {" "}
                    {Math.round(props.data.temperature)}{" "}
                  </span>
                  <span class="units">°C |°F</span>
                </div>
              </div>
            </div>
            <div class="col-5">
              <ul>
                <li className="text-capitalize">{props.data.description}</li>
                <li>Humidity: {props.data.humidity}% </li>
                <li>Wind: {Math.round(props.data.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}