import React from "react";
import PropTypes from "prop-types";
import "./PersonComponent.css";

const PersonComponent = props => {
  return (
    <div className="person-card" onClick={() => props.onUserClick(props.url)}>
      <h2>{props.name}</h2>
      <p>Birthdate: {props.birth_year}</p>
      <p>Height: {props.height}</p>
      <p>Weight: {props.mass}</p>
    </div>
  );
};

PersonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default PersonComponent;
