import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';

import { TextH3 } from '../../global';
import { Container, TextButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  title?: string;
  children?: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  ...rest
}) => (
  <Container {...rest} disabled={disabled} onPress={onPress}>
    <TextButton>
      <TextH3 primary> {children} </TextH3>
    </TextButton>
  </Container>
);

export default Button;
