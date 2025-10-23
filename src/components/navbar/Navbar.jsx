import React from "react";
import "./Navbar.css";
import { FaPhoneVolume, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h1>BekDev</h1>
        </div>
        <ul className="links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Skill</li>
        </ul>
        <div className="icons">
          <button>Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
