import React from 'react';
import {useAuth} from '../../hooks/auth';
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
