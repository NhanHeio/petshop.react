import React, { useEffect } from 'react';
import HomePicture from '../components/home/HomePicture'
import HomeAbout from '../components/home/HomeAbout'
import HomeCommit from '../components/home/HomeCommit'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";

const Home = () => {
  let location = useLocation()
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE)
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location]);
  useEffect(() => {
    document.title = 'PetShop'
  }, [])
  return <div>
    <Header />
    <HomePicture />
    <HomeAbout />
    <HomeCommit />
    <Footer />
  </div>;
};

export default Home;
