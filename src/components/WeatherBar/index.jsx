import React from "react";
import "./WeatherBar.css";
import Proptypes from "prop-types";

export default function WeatherBar(props) {
  return (
    <>
      <div className="weather-bar">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/external-justicon-flat-justicon/64/external-sun-weather-justicon-flat-justicon-1.png"
          alt="external-sun-weather-justicon-flat-justicon-1"
        />
        <div className="uv-parent">
          <div className="uv-child">
            <span className="uvi-radiation">{props.uvi} UVI</span>
            <span className="temp-badge">Moderate</span>
          </div>
          <p>Moderate risk of from UV rays</p>
        </div>
      </div>
    </>
  );
}

WeatherBar.propTypes = {
  uvi: Proptypes.number,
};
