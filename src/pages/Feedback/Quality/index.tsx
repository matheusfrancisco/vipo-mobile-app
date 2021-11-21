import React from 'react';

import { useField } from 'formik';

import { Container, Option, Options, Title } from './styles';

const emojis = [
  require('../../../assets/feedback/emoji2.png'),
  require('../../../assets/feedback/emoji4.png'),
  require('../../../assets/feedback/emoji5.png'),
  require('../../../assets/feedback/emoji1.png'),
  require('../../../assets/feedback/emoji3.png'),
];

const Quality: React.FC = () => {
  const [field, , helpers] = useField('quality');

  return (
    <Container>
      <Title>O que você achou do rolê?</Title>

      <Options>
        {emojis.map((uri, index) => {
          const value = index + 1;

          const isSelected = value === field.value;

          return (
            <Option.Button
              key={`quality-${value}`}
              isSelected={isSelected}
              onPress={() => helpers.setValue(value)}>
              <Option.Emoji source={uri} />
            </Option.Button>
          );
        })}
      </Options>
    </Container>
  );
};

export default Quality;
