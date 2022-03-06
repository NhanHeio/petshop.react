import React, { useEffect } from 'react';
import AboutComponent from '../components/about/AboutComponent'

const About = () => {
  useEffect(() => {
    document.title = 'About'
  },[])
  return <div>
      <AboutComponent />
  </div>;
};

export default About;
