import React from 'react';
import { Button } from 'react-native';
import { useAuth } from '../../hooks/auth';
import Search from '../Search';

import { Container, Title } from './styles';

const Home: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <Search />
    </>
  );
};

export default Home;
