import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles';

const IconHelp: React.FC = () => ( 
  <Container>
    <Icon.Button
        name="question-circle"
        backgroundColor="none"
        onPress={() => console.log("Foi")}
      >
    </Icon.Button>
  </Container>
);

export default IconHelp;