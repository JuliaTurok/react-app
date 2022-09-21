import React from "react";
import "./App.css";
export default function GetDay(){
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
    hours = `0${hours}`}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

return (
  
    <h2 id="h2">
      {" "}
      {day}, {hours}:{minutes}
    </h2>

);
}