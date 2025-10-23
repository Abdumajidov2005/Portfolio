import React from "react";
import "./Home.css";
import Hero from "../hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div className="home">
        <div className="container">
           <div className="education">
               <div className="education_title">
                   <h2>Ma'lumoti</h2>
               </div>
           </div>
        </div>
      </div>
    </>
  );
}

export default Home;
