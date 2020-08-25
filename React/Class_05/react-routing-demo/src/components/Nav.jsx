import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
  };

  return (
    <div className="nav-bar">
      <ul>
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/friends">
          <li>Friends</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
