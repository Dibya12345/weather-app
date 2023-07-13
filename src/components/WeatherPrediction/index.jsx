import React from "react";
import "./WeatherPrediction.css";
import Proptypes from "prop-types";

export default function WeatherPrediction(props) {
  return (
    <>
      <div className="weather-prediction">
        <div className="weather-box">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/cloud-emoji.png"
            alt="cloud-emoji"
          />
          <div className="weather-details">
            <div className="date">{props.date}</div>
            <div className="condition">{props.condition}</div>
          </div>
        </div>
        <div className="temperature">
          {props.high_temp} / {props.low_temp}
        </div>
      </div>
    </>
  );
}

WeatherPrediction.propTypes = {
  date: Proptypes.string,
  condition: Proptypes.string,
  high_temp: Proptypes.string,
  low_temp: Proptypes.string,
};
