import React from "react";
import "./TomorrowWeather.css";
import PropTypes from "prop-types";

export default function TomorrowWeather(props) {
  return (
    <>
      <div className="current_status_container">
        <div className="current_status">
          <p>Tomorrow</p>
          <h2>Weather</h2>
        </div>
        <div className="current_status_temp">
          <h1>{props.temperature}</h1>
          <p>{props.condition}</p>
        </div>
      </div>
    </>
  );
}

TomorrowWeather.propTypes = {
  temperature: PropTypes.string,
  condition: PropTypes.string,
};
