import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function RouterDom() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default RouterDom;
