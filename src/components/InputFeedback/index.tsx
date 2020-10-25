import React from 'react';
import {Container, TextInput} from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputFeedback: React.FC = ({...rest}) => (
  <Container>
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#666360"
      {...rest}
    />
  </Container>
);

export default InputFeedback;
