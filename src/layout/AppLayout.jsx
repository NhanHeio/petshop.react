import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Ecommerce from '../pages/Ecommerce';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Footer from '../components/footer/Footer';

const Applayout = () => {
  return <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/commerce" element={<Ecommerce />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    <Footer />
  </div>;
};

export default Applayout;
