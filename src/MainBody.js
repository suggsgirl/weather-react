import React from "react";

export default function MainBody() {
  return (
    <div className="card w-100 today">
      <div className="card-body">
        <h1>
          {" "}
          <i className="fas fa-map-marker-alt"></i> <span>London</span>{" "}
        </h1>
        <h3>
          <i className="far fa-clock"></i> <span>Thursday 1 Apr 14:59 </span>
        </h3>
        <div className="row">
          <div className="col-7">
            <div className="clearfix weather-temperature">
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt=""
                id="icon"
                class="float-left"
              />
              <div className="float-left">
                <span class="temperature" id="showTemperature">
                  {" "}
                  15{" "}
                </span>
                <span class="units">
                  <a href="#" id="celsius-link" class="active">
                    °C{" "}
                  </a>{" "}
                  |{" "}
                  <a href="#" id="fahrenheit-link">
                    {" "}
                    °F
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
          <div class="col-5">
            <ul>
              <li>Clouds</li>
              <li>Humidity: 58% </li>
              <li>Wind: 6km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
