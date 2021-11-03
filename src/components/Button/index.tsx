import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, TextButton } from './styles';
import { TextH3 } from '../../global';

interface ButtonProps extends RectButtonProperties {
  title?: string;
  children?: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onPress, ...rest }) => (
  <Container {...rest} onPress={onPress}>
    <TextButton>
      <TextH3 primary> {children} </TextH3>
    </TextButton>
  </Container>
);

export default Button;
