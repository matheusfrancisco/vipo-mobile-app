import React from 'react';
import { Button } from 'react-native';
import  { useAuth } from '../../hooks/auth';


import {
  Container,
  Title,
} from './styles';

const Home: React.FC = () => {
  const { signOut } = useAuth();
  return  (
    <>
      <Container>
        <Button title="Sair" onPress={signOut}/>
        <Title>
            Essa é a pagina principal
        </Title>
      </Container>
    </>
  )
};

export default Home;
