import React from "react";
import ErrorImg from "../assets/error.png";
import "./LocationError.css";
export default function LocationError() {
  return (
    <>
      <div className="error_container">
        <div className="error_location">
          <img className="error_image" src={ErrorImg} alt="error" />
          <p>Enable location to view the app</p>
        </div>
      </div>
    </>
  );
}
