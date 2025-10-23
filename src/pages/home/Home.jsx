import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../hero/Hero";
import { FaPlus } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import { getSkillsData } from "../services/app";

function Home() {
  const [skill, setSkill] = useState(null);
  const [loaderSkill, setLoaderSkill] = useState(false);

  useEffect(() => {
    setLoaderSkill(true);
    getSkillsData()
      ?.then(setSkill)
      .finally(() => {
        setLoaderSkill(false);
      });
  }, []);

  return (
    <>
      <Hero />
      <div className="home">
        <div className="container">
          <div className="education">
            <div className="education-neons"></div>
            <div className="education_title">
              <div>
                <h2>Ta'lim ma'lumotlarim</h2>
                <p>
                  Ma'lumotim hamda dasturlash bo'yicha ma'lumotlarimni
                  ko'rishingiz mumkin.
                </p>
              </div>
              <div className="education_plus">
                <button>
                  Qo'shish <FaPlus />
                </button>
              </div>
            </div>
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

          <div className="skills">
            <div className="skills-title">
              <h2>Skillarim</h2>
              <p>Bu yerda dasturlash sohasi bo'yicha skillarim berilgan</p>
            </div>
            <div className="skills-content">
              {loaderSkill ? (
                <div className="loader-border">
                  <div className="loader_card"></div>
                  <div className="loader_card"></div>
                  <div className="loader_card"></div>
                  <div className="loader_card"></div>
                </div>
              ) : (
                skill?.map((item) => {
                  return (
                    <div className="content-card">
                      <div className="card-imgs">
                        <img src={item?.icon} alt="" />
                      </div>
                      <h3>{item?.name}</h3>
                      <p>{item?.percentage}%</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
