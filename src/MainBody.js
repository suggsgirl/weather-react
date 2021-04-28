import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate"; 

export default function MainBody(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/02d@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="card w-100 today">
        <div className="card-body">
          <h1>
            {" "}
            <i className="fas fa-map-marker-alt"></i>{" "}
            <span>{weatherData.city}</span>{" "}
          </h1>
          <h3>
            <i className="far fa-clock"></i>{" "}
            <span>
              <FormattedDate date={weatherData.date} />
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
                    {Math.round(weatherData.temperature)}{" "}
                  </span>
                  <span class="units">°C |°F</span>
                </div>
              </div>
            </div>
            <div class="col-5">
              <ul>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}% </li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "db6cd03093ca5ac508123ad570a470a9";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
