import React, { useEffect } from 'react';
import SignupComponent from '../components/auth/SignupComponent';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ReactGA from "react-ga4";
import { useLocation } from 'react-router-dom';

const Signup = () => {
     // ga4
     let location = useLocation()
     useEffect(() => {
       ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE)
       ReactGA.send({ hitType: "pageview", page: location.pathname })
     }, [location]);
   
     //
  return <div>
    <Header />
    <SignupComponent />
    <Footer />
  </div>;
};

export default Signup;
