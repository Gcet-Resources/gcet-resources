import React from "react";
import "./Navbar.css"; // External CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <img alt="Logo" src="media-utils\favicon.ico" width="40" height="40" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Telegram</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default Navbar;
