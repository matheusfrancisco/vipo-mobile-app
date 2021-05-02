import React from 'react';
import Search from '../Search';
import HeaderProfile from '../../components/HeaderProfile';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <HeaderProfile />
      <Search />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
