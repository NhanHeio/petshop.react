import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {path} from '../constants/constant';
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
      <Header className="sticky top-0 z-{100}" />
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.CALENDAR} element={<Calendar />} />
        <Route path={path.COMMERCE} element={<Ecommerce />} />
        <Route path={path.ABOUT} element={<About />} />
        <Route path={path.CONTACT} element={<Contact />} />
        <Route path={path.SIGNUP} element={<Signup />} />
        <Route path={path.LOGIN} element={<Signin />} />
      </Routes>
    <Footer className="footer" />
  </div>;
};

export default Applayout;
