import React from "react";
import "./AirQuality.css";
import PropTypes from "prop-types";

export default function AirQualityStatus(props) {
  return (
    <>
      <div className="content_card_1">
        <div className="air_heading">
          <h2>Air Quality</h2>
          <p>UV index: {props.uv}</p>
        </div>
        <div className="air_degree">
          <span className="air_degree_1">{props.aqi}</span>
          <span className="air_degree_2">AQI</span>
          <div>{props.wind_direction}</div>
        </div>
        
      </div>
    </>
  );
}

AirQualityStatus.propTypes = {
  aqi: PropTypes.number,
  uv: PropTypes.number,
  wind_direction: PropTypes.string,
};
