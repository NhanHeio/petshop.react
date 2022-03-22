import React from 'react';
// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { path } from '../constants/constant';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Ecommerce from '../pages/Ecommerce';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import ProductDetail from '../components/commerce/Products/ProductDetail';
import Checkout from '../components/commerce/Checkout/Checkout';
import Personal from '../components/auth/personal/Personal';
import Dashboard from '../pages/dashboard/DashBoard'

const Applayout = () => {
  // const [showGoTop, setShowGoTop] = useState(false)
  // useEffect(() => {

  //   const handleScroll = () => {
  //     if (window.scrollY >= 50) {
  //       setShowGoTop(true)
  //     } else {
  //       setShowGoTop(false) 
  //     }
  //     console.log(showGoTop)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  // }, [])

  //console.log(showGoToTop)

  return <div>
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.CALENDAR} element={<Calendar />} />
      <Route path={path.COMMERCE} element={<Ecommerce />} />
      <Route path={path.ABOUT} element={<About />} />
      <Route path={path.CONTACT} element={<Contact />} />
      <Route path={path.SIGNUP} element={<Signup />} />
      <Route path={path.LOGIN} element={<Signin />} />
      <Route path={path.PRODUCT} element={<ProductDetail />} />
      <Route path={path.CHECKOUT} element={<Checkout />} />
      <Route path={path.PROFILE} element={<Personal />} />
      <Route path={path.DASHBOARD} element={<Dashboard />}></Route>
    </Routes>
  </div>;
};

export default Applayout;
