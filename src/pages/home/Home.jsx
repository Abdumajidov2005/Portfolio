import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../hero/Hero";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../../components/ScrollToTop";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import { getProjectData, getSkillsData } from "../services/app";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { baseUrl } from "../services/config";

function Home() {
  const [skill, setSkill] = useState(null);
  const [project, setProject] = useState(null);
  const [loaderSkill, setLoaderSkill] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    setLoaderSkill(true);
    Promise.all([getSkillsData(), getProjectData()])
      .then(([skillsData, projectData]) => {
        setSkill(skillsData);
        setProject(projectData);
      })

      .finally(() => {
        setLoaderSkill(false);
      });
  }, []);

  const getMessageData = () => {
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
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <ScrollToTop />
      <div id="hero">
        <Hero />
      </div>
        <div className="container">
          <div className="education" id="education">
            <div className="education-neons"></div>
            <motion.div 
              className="education_title"
              data-aos="fade-up"
            >
              <div>
                <h2>Ta'lim ma'lumotlarim</h2>
                <p>
                  Ma'lumotim hamda dasturlash bo'yicha ma'lumotlarimni
                  ko'rishingiz mumkin.
                </p>
              </div>
              {/* <div className="education_plus">
                <button>
                  Qo'shish <FaPlus />
                </button>
              </div> */}
            </motion.div>
            <div className="education-boxs">
              <Swiper
                slidesPerView={4}
                spaceBetween={100}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ul className="edu-box">
                    <li>
                      Ta'lim maskani: <span>Codial</span>
                    </li>
                    <li>
                      Daraja : <span>Junior</span>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className="edu-box">
                    <li>
                      Ta'lim maskani: <span>Codial</span>
                    </li>
                    <li>
                      Daraja : <span>Junior</span>
                    </li>
                    {/* <li>
                  O'qituvchi: <span>Abbosbek</span>
                </li>
                <li>
                  Boshlagan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Tugatgan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Izoh :
                  <span>
                    descriotionc Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Velit eum adipisci, quo commodi dolorem
                    sit maxime quam consequuntur deleniti quis animi, magnam
                    corrupti doloribus vitae aliquid tempore dolore nisi aut.
                  </span>
                </li> */}
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className="edu-box">
                    <li>
                      Ta'lim maskani: <span>Codial</span>
                    </li>
                    <li>
                      Daraja : <span>Junior</span>
                    </li>
                    {/* <li>
                  O'qituvchi: <span>Abbosbek</span>
                </li>
                <li>
                  Boshlagan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Tugatgan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Izoh :
                  <span>
                    descriotionc Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Velit eum adipisci, quo commodi dolorem
                    sit maxime quam consequuntur deleniti quis animi, magnam
                    corrupti doloribus vitae aliquid tempore dolore nisi aut.
                  </span>
                </li> */}
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className="edu-box">
                    <li>
                      Ta'lim maskani: <span>Codial</span>
                    </li>
                    <li>
                      Daraja : <span>Junior</span>
                    </li>
                    {/* <li>
                  O'qituvchi: <span>Abbosbek</span>
                </li>
                <li>
                  Boshlagan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Tugatgan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Izoh :
                  <span>
                    descriotionc Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Velit eum adipisci, quo commodi dolorem
                    sit maxime quam consequuntur deleniti quis animi, magnam
                    corrupti doloribus vitae aliquid tempore dolore nisi aut.
                  </span>
                </li> */}
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul className="edu-box">
                    <li>
                      Ta'lim maskani: <span>Codial</span>
                    </li>
                    <li>
                      Daraja : <span>Junior</span>
                    </li>
                    {/* <li>
                  O'qituvchi: <span>Abbosbek</span>
                </li>
                <li>
                  Boshlagan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Tugatgan yili : <span>2025-06-06</span>
                </li>
                <li>
                  Izoh :
                  <span>
                    descriotionc Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Velit eum adipisci, quo commodi dolorem
                    sit maxime quam consequuntur deleniti quis animi, magnam
                    corrupti doloribus vitae aliquid tempore dolore nisi aut.
                  </span>
                </li> */}
                  </ul>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="skills" id="skills">
            <motion.div 
              className="skills-title"
              data-aos="fade-up"
            >
              <h2>Skillarim</h2>
              <p>Bu yerda dasturlash sohasi bo'yicha skillarim berilgan</p>
            </motion.div>
            <div className="skills-content">
              {loaderSkill ? (
                <div className="loader-border">
                  <div className="loader_card"></div>
                  <div className="loader_card"></div>
                  <div className="loader_card"></div>
                  <div className="loader_card"></div>
                </div>
              ) : showMore ? (
                skill?.slice(0).map((item, index) => {
                  return (
                    <motion.div 
                      className="content-card"
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="card-imgs">
                        <img src={item?.icon} alt="" />
                      </div>
                      <h3>{item?.name}</h3>
                      <p>{item?.percentage}%</p>
                    </motion.div>
                  );
                })
              ) : (
                skill?.slice(0, 4).map((item, index) => {
                  return (
                    <motion.div 
                      className="content-card"
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="card-imgs">
                        <img src={item?.icon} alt="" />
                      </div>
                      <h3>{item?.name}</h3>
                      <p>{item?.percentage}%</p>
                    </motion.div>
                  );
                })
              )}
            </div>
            <div className="btns skill-btns">
              {showMore ? (
                <motion.button
                  onClick={() => {
                    setShowMore(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show less
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => {
                    setShowMore(true);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show More
                </motion.button>
              )}
            </div>
          </div>

          <div className="experience">
            <motion.div 
              className="experience-title"
              data-aos="fade-up"
            >
              <h2>Ish tajribam</h2>
              <p>Mening shu vaqtgacha ishlagan joylarim haqida ma'lumot</p>
            </motion.div>
            <div className="experience-content">
              <motion.ul 
                className="experience-card"
                data-aos="flip-left"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <li>Job title: Frontend</li>
                <li>Company: Codial</li>
              </motion.ul>
              <motion.ul 
                className="experience-card"
                data-aos="flip-left"
                data-aos-delay="100"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <li>Job title: Frontend</li>
                <li>Company: Codial</li>
              </motion.ul>
              <motion.ul 
                className="experience-card"
                data-aos="flip-left"
                data-aos-delay="200"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <li>Job title: Frontend</li>
                <li>Company: Codial</li>
              </motion.ul>
              <motion.ul 
                className="experience-card"
                data-aos="flip-left"
                data-aos-delay="300"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <li>Job title: Frontend</li>
                <li>Company: Codial</li>
              </motion.ul>
            </div>
          </div>
          <div className="projects" id="projects">
            <motion.div 
              className="project_title"
              data-aos="fade-up"
            >
              <h2>Loyihalarim</h2>
              <p>
                Real va portfolio uchun tayyorlagan loyihalarim bilan
                tanishishingiz mumkin.
              </p>
            </motion.div>
            <div className="project_cards">
              {project?.map((item, index) => {
                return (
                  <motion.div 
                    className="project_card"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="project_card-img">
                      <motion.img 
                        src={item?.image} 
                        alt=""
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <h3>{item?.title}</h3>
                    <p>
                      {item?.description.length > 30
                        ? item?.description?.slice(0, 30) + "..."
                        : item?.description}
                    </p>
                    <motion.a 
                      target="_blank" 
                      href={item?.project_url}
                      whileHover={{ x: 5 }}
                    >
                      Lohiyani ko'rish <MdOutlineRemoveRedEye />
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <motion.div 
            className="create_message"
            id="contact"
            data-aos="zoom-in"
          >
            <motion.div 
              className="create_message-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <motion.input 
                type="text" 
                placeholder="Name..."
                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              />
              <motion.input 
                type="text" 
                placeholder="Email..."
                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              />
              <motion.input 
                type="text" 
                placeholder="Subject..."
                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              />
            </motion.div>
            <motion.textarea 
              name="" 
              id=""
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(255,255,255,0.3)" }}
            ></motion.textarea>
            <motion.button
              className="submit-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Yuborish
            </motion.button>
          </motion.div>
        </div>
    </>
  );
}

export default Home;
