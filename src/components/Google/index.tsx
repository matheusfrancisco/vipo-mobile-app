import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonFacebook: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <Icon.Button
      name="google"
      backgroundColor="#ff0000"
      onPress={() => console.log('Foi')}>
      Login with Google
    </Icon.Button>
  </Container>
);

export default ButtonFacebook;
