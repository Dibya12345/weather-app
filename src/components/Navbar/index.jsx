import React from "react";
import "./Navbar.css";
// import Countries from "../../assets/codes.json";
export default function Navbar(props) {
  
  return (
    <>
      <section className="navbar">
        <div className="profile_section">
          <div className="name">
            <h2>{props.degree}</h2>
            <p>{props.place}</p>
          </div>
        </div>

        <div className="search">
          <input
            className="search-txt"
            type="text"
            placeholder="Search Place"
            value = {props.search}
            onChange = {(e) => props.setSearch(e.target.value)}
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </section>
    </>
  );
}
