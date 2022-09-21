
import './App.css';
import React, { useState } from "react";
import Forecast from "./Forecast";

export default function App() {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState("");
  

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showForecast(event) {
    event.preventDefault();
    setForecast(<Forecast city={city} />);
  }
  return (
    <div>
      <div className="container">
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
            id="text-input"
          />
          <button onClick={showForecast}>🔍</button>
        </form>
        <h2>{forecast}</h2>
        
      </div>
      <div className="link">
        <a href="https://github.com/JuliaTurok/Project-She-Codes.git">
          Open-source code
        </a>
        , by Julia Turok
      </div>
    </div>
  );
}