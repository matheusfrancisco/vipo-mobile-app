import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container} from './styles';
import {ButtonText} from '../../global';
interface ButtonProps extends RectButtonProperties {
  children?: string;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container {...rest}>
    <ButtonText> {children} </ButtonText>
  </Container>
);

export default Button;
