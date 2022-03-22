import React, { useEffect } from 'react';
import HomePicture from '../components/home/HomePicture'
import HomeAbout from '../components/home/HomeAbout'
import HomeCommit from '../components/home/HomeCommit'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home = () => {
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
