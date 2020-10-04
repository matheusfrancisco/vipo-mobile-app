import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container} from './styles';

const IconMenu: React.FC = () => (
  <Container>
    <Icon.Button
      name="bars"
      backgroundColor="none"
      color="#8257e6"
      onPress={() => console.log('Foi')}
    />
  </Container>
);

export default IconMenu;
