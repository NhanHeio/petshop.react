import React from 'react';
import HomePicture from '../components/home/HomePicture'
import HomeAbout from '../components/home/HomeAbout'
import HomeCommit from '../components/home/HomeCommit'

const Home = () => {
  return <div>
      <HomePicture />
      <HomeAbout />
      <HomeCommit />
  </div>;
};

export default Home;
