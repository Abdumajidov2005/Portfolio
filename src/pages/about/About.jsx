import React, { useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="about-page">
      <div className="container">
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 data-aos="fade-up">Men haqimda</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Frontend Developer va Web Dasturchi
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-section"
            data-aos="fade-right"
          >
            <div className="about-text">
              <h2>Salom, Men O'tkirbek</h2>
              <p>
                Men professional Frontend Developer bo'lib, zamonaviy web
                texnologiyalari bilan ishlashni yaxshi ko'raman. React, JavaScript,
                va boshqa zamonaviy kutubxonalar yordamida foydalanuvchilarga qulay
                va chiroyli web ilovalar yarataman.
              </p>
              <p>
                Har bir loyihaga kreativ yondashuv va professional ko'rinish
                berishga harakat qilaman. Mening maqsadim - mijozlar va
                foydalanuvchilar uchun eng yaxshi tajribani yaratish.
              </p>
            </div>
          </motion.div>

          <div className="about-cards">
            <motion.div
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay="100"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <FaGraduationCap className="card-icon" />
              <h3>Ta'lim</h3>
              <p>Codial IT Academy va boshqa platformalarda o'qiganman</p>
            </motion.div>

            <motion.div
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay="200"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <FaCode className="card-icon" />
              <h3>Tajriba</h3>
              <p>2+ yillik frontend dasturlash tajribasi</p>
            </motion.div>

            <motion.div
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay="300"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <FaLaptopCode className="card-icon" />
              <h3>Loyihalar</h3>
              <p>10+ muvaffaqiyatli loyihalar yaratganman</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
