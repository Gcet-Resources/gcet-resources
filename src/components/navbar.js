import React from "react";
import "./Navbar.css"; // External CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <img alt="Logo" src="favicon.io" width="40" height="40" />
      <a href="#">Wearable</a>
      <a href="#">Neural</a>
      <a href="#">Programs</a>
      <a href="#">Updates</a>
      <a href="#">Search</a>
    </div>
  );
};

export default Navbar;
