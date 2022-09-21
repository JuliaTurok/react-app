import React, { useState } from "react";
import axios from "axios";
import GetDay from "./GetDay";
import "./App.css";



export default function App(props) {
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(weather.temperature);
  const [unit, setUnit] = useState("°C");
  
  function showTemperature(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=914cbf8aca52842e5866dd42da649610&units=metric`;
  axios.get(url).then(showTemperature);

 function fahrenheit(event) {
   event.preventDefault();
   const fahrenheitTemperature = Math.round((weather.temperature * 9) / 5 + 32);
   setUnit("°F");
   setTemperature(fahrenheitTemperature);
 }
 function celsius(event) {
   event.preventDefault();
   setUnit("°C");
   setTemperature(weather.temperature);
 }
  return (
    <div>
      <div className="city-box">
        <GetDay />
        <div className="city-container">
          <div id="city">{props.city}</div>
          <div id="temperature">
            {" "}
            {Math.round(temperature)}
            {unit}
          </div>
          <span className="units">
            <a href="/" onClick={celsius}>
              °C
            </a>
            <a href="/" onClick={fahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
      <section>
        <div className="text">
          <div>
            Humidity:<span id="humidity">{weather.humidity}</span>%
          </div>
          <div>
            Wind Speed: <span id="wind">{weather.wind}</span> km/h
          </div>
        </div>
        <div className="weather">
          <img src={weather.icon} alt={weather.description} />
        </div>
        <div id="description">{weather.description}</div>
      </section>
    </div>
  );
}
