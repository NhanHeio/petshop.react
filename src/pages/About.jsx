import React, { useEffect } from 'react';
import AboutComponent from '../components/about/AboutComponent';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";

const About = () => {
   // ga4
   let location = useLocation()
   useEffect(() => {
     ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE)
     ReactGA.send({ hitType: "pageview", page: location.pathname })
   }, [location]);
 
   //
  useEffect(() => {
    document.title = 'About'
  },[])
  return <div>
      <Header />
      <AboutComponent />
      <Footer />
  </div>;
};

export default About;
