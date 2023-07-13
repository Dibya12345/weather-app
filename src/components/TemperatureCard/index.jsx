import React from "react";
import "./TemperatureCard.css";
import PropTypes from "prop-types";

export function TemperatureGraph(props) {
  return (
    <div className="temperture_graph">
      <h2>How is the temperature today</h2>
      <div className="temperture_graph_container">
        <div className="box_1">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/external-justicon-flat-justicon/64/external-sun-weather-justicon-flat-justicon-1.png"
            alt="external-sun-weather-justicon-flat-justicon-1"
          />
          <div className="temp_">
            <h3>Morning</h3>
            <p>{props.morning_temp}</p>
          </div>
        </div>
        <div className="box_2">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/cloud.png"
            alt="cloud"
          />

          <div className="temp_">
            <h3>Afternoon</h3>
            <p>{props.afternoon_temp}</p>
          </div>
        </div>
        <div className="box_3">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/emoji/48/sun-behind-cloud.png"
            alt="sun-behind-cloud"
          />
          <div className="temp_">
            <h3>Evening</h3>
            <p>{props.evening_temp}</p>
          </div>
        </div>
        <div className="box_4">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/plasticine/100/partly-cloudy-night.png"
            alt="partly-cloudy-night"
          />
          <div className="temp_">
            <h3>Night</h3>
            <p>{props.night_temp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

TemperatureGraph.propTypes = {
  morning_temp: PropTypes.string,
  afternoon_temp: PropTypes.string,
  evening_temp: PropTypes.string,
  night_temp: PropTypes.string,
};
export default TemperatureGraph;
