import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaPhoneVolume, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={scrolled ? "scrolled" : ""}
    >
      <div className="container">
        <Link to="/">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1>BekDev</h1>
          </motion.div>
        </Link>
        <ul className="links">
          <motion.li whileHover={{ scale: 1.1, color: "#059c3a" }}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#059c3a" }}>
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#059c3a" }}>
            <Link to="/skills">Skills</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#059c3a" }}>
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>
        <div className="icons">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(5, 156, 58, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
