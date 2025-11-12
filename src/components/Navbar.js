import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="hero">
      <div className="overlay">
        <h1 className="title">🎉 Children’s Day Celebration 🎉</h1>
        <div className="buttons">
          <Link to="/" className="btn">Home</Link>
          <Link to="/About" className="btn">About</Link>
          <Link to="/Gallery" className="btn">Gallery</Link>
          <Link to="/Celebration" className="btn">Celebrate</Link>
          <Link to="/upload" className="nav-btn">Upload</Link>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
