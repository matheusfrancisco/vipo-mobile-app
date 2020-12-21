import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, TextButton} from './styles';
import {TextH3} from '../../global';
interface ButtonProps extends RectButtonProperties {
  children?: string;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container {...rest}>
    <TextButton>
      <TextH3> {children} </TextH3>
    </TextButton>  
    </Container>
);

export default Button;
