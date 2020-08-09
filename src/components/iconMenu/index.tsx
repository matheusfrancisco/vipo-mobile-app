import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;

}

const IconMenu: React.FC<ButtonProps> =({ children, ...rest }) => (
  <Container {...rest} >
    <Icon.Button
        name="user"
        backgroundColor="none"
        onPress={() => console.log("Foi")}
      >
    </Icon.Button>
  </Container>
);

export default IconMenu;