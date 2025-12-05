import React, { useEffect } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className="hero">
        <div className="container">
          <motion.div 
            className="hero_left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="hero_left-content1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span>Hi,</span> <span> I'm</span> O'tkirbek
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span>Frontend</span> Developer
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi enim atque fugiat nesciunt tempore porro error, 
              perspiciatis eent.
            </motion.p>
            <motion.div 
              className="btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 180, 84, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 180, 84, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
            </motion.div>
          </motion.div>
          <div className="bg-color"></div>
          <motion.div 
            className="hero_right"
            initial={{ opacity: 0, x: 100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.img 
              src="imgs/user.png" 
              alt=""
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
