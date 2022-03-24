import React, { useEffect } from 'react';
import AboutComponent from '../components/about/AboutComponent';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const About = () => {
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
