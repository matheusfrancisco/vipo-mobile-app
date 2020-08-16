import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const InputMatcher: React.FC<InputProps> = () => (
  <Container>
    <TextInput 
      keyboardAppearance="dark"
      placeholderTextColor="#666360" 
    />
  </Container>
);

export default InputMatcher;