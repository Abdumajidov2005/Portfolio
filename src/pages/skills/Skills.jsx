import React, { useEffect, useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { getSkillsData } from "../services/app";

function Skills() {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    setLoading(true);
    getSkillsData()
      .then((data) => {
        setSkills(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="skills-page">
      <div className="container">
        <motion.div
          className="skills-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 data-aos="fade-up">Mening Ko'nikmalarim</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Dasturlash sohasida bilgan texnologiyalarim
          </p>
        </motion.div>

        <div className="skills-grid">
          {loading ? (
            <div className="loader-container">
              <div className="loader-card"></div>
              <div className="loader-card"></div>
              <div className="loader-card"></div>
              <div className="loader-card"></div>
            </div>
          ) : (
            skills?.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-icon">
                  <img src={skill?.icon} alt={skill?.name} />
                </div>
                <h3>{skill?.name}</h3>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill?.percentage}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  <span className="percentage">{skill?.percentage}%</span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
