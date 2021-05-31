import { useField } from 'formik';
import React from 'react';

import { Container, TextInput, Title } from './styles';

const TextFeedback: React.FC = () => {
  const [field, , helpers] = useField<string>('feedback');

  return (
    <Container>
      <Title>
        Este espaço é para você nos informar sobre o rolê. Fique a vontade, o
        feedback é anônimo (denunciar, criticar, sugerir, elogiar).
      </Title>

      <TextInput
        multiline
        value={field.value}
        onChangeText={(text) => helpers.setValue(text)}
      />
    </Container>
  );
};

export default TextFeedback;
