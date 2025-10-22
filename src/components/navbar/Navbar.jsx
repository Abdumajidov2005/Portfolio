import React from "react";
import "./Navbar.css";
import { FaPhoneVolume, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div class="container">
        <div class="logo">
          <h1>BekDev</h1>
        </div>
        <ul class="links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Skill</li>
        </ul>
        <div class="icons">
          <p>
            <FaUser />
          </p>
          <p>
            <FaPhoneVolume />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
