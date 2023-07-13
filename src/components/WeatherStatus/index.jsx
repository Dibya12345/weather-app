import React from "react";
import "./WeatherStatus.css";
import PropTypes from "prop-types";

export default function WeatherStatus(props) {
  return (
    <>
      <div className="content_card">
        <div className="weather_heading">
          <h2>Weather</h2>
          <p>What's the weather</p>
        </div>
        <div className="weather_degree">
          <span className="weather_degree_1">{props.temperature}</span>
          <span className="weather_degree_2">{props.app_temp}</span>
          <div>{props.weather_description}</div>
        </div>
        <div className="weather_box">
          <div className="weather_box_1">
            <h3>Pressure</h3>
            <p>{props.pressure} mb</p>
          </div>
          <div className="weather_box_2">
            <h3>Visibility</h3>
            <p>{props.visibility} km</p>
          </div>
          <div className="weather_box_3">
            <h3>Humidity</h3>
            <p>{props.humidity}%</p>
          </div>
        </div>
      </div>
    </>
  );
}

WeatherStatus.propTypes = {
  pressure: PropTypes.number,
  visibility: PropTypes.number,
  humidity: PropTypes.number,
  temperature: PropTypes.string,
  weather_description: PropTypes.string,
  app_temp: PropTypes.string,
};
