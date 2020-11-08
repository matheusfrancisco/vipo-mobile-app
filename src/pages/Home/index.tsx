import React from 'react';
import Search from '../Search';
import HeaderProfile from '../../components/HeaderProfile';

const Home: React.FC = () => {
  return (
    <>
      <HeaderProfile />
      <Search />
    </>
  );
};

export default Home;
