import React, { useState, useEffect } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { baseUrl } from "../services/config";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY1MDgyODM1LCJpYXQiOjE3NjI0OTA4MzUsImp0aSI6Ijk5MjBlMjAxZmU1NTQzMDBhZTBhMWZlYWJkNGUwOTViIiwidXNlcl9pZCI6MX0.y9ZNgjKwgI83UJxgdYXrFIb_eN4_qmuY2qFmwJ_KisE"
    );

    const raw = JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/message/create/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setStatus("Xabar yuborildi!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        setStatus("Xatolik yuz berdi!");
        console.error(error);
      });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <motion.div
          className="contact-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 data-aos="fade-up">Bog'lanish</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Men bilan bog'laning, birgalikda ajoyib loyihalar yaratamiz
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            data-aos="fade-right"
          >
            <h2>Aloqa Ma'lumotlari</h2>
            <div className="info-items">
              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>bekdev@example.com</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaPhone className="info-icon" />
                <div>
                  <h3>Telefon</h3>
                  <p>+998 90 123 45 67</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Manzil</h3>
                  <p>Toshkent, O'zbekiston</p>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <h3>Ijtimoiy Tarmoqlar</h3>
              <div className="social-icons">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTelegram />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            data-aos="fade-left"
            onSubmit={handleSubmit}
          >
            <h2>Xabar Yuborish</h2>
            <div className="form-group">
              <motion.input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div className="form-group">
              <motion.input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div className="form-group">
              <motion.input
                type="text"
                placeholder="Mavzu"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div className="form-group">
              <motion.textarea
                placeholder="Xabaringiz"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            {status && <p className="status-message">{status}</p>}
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yuborish
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
