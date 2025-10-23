import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero_left">
            <p className="hero_left-content1">WELCOME TO MY PORTFOLIO</p>
            <h1><span>Hi,</span> <span> I'm</span> O'tkirbek</h1>
            <h3><span>Frontend</span> Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eligendi enim atque fugiat nesciunt tempore porro error, 
              perspiciatis eent.
            </p>
            <div className="btns">
              <button>Explore</button>
              <button>About</button>
            </div>
          </div>
          <div className="bg-color"></div>
          <div className="hero_right">
            <img src="imgs/user.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
