import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles';

const IconUser: React.FC = () => (
  <Container>
    <Icon.Button
      name="user"
      backgroundColor="none"
      color="#8257e6"
      onPress={() => console.log('Foi')}
    />
  </Container>
);

export default IconUser;
