import React from "react";
import "./Navbar.css";
// import Countries from "../../assets/codes.json";
import Proptypes from "prop-types";

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
            value={props.search}
            onChange={props.filterHandler}
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        {props.filterd_data.length !== 0 && props.search !== "" && (
          <div className="country_list">
            {props.filterd_data.map((value, key) => {
              return (
                <div className="country" key={key} onClick={props.searches}>
                  <p>{value.country}</p>
                </div>
              );
            }) || ""}
          </div>
        )}
      </section>
    </>
  );
}

Navbar.propTypes = {
  degree: Proptypes.string,
  place: Proptypes.string,
  search: Proptypes.string,
  filterHandler: Proptypes.func,
  filterd_data: Proptypes.array,
  searches: Proptypes.func,
};
