import React from 'react';

import { useField } from 'formik';

import { Bold, Container, Option, Options, Title } from './styles';

interface IItem {
  value: string;
  label: string;
}

const items: IItem[] = [
  {
    value: 'environment',
    label: 'Ambiente',
  },
  {
    value: 'attendance',
    label: 'Atendimento',
  },
  {
    value: 'drink',
    label: 'Bebida',
  },
  {
    value: 'food',
    label: 'Comida',
  },
  {
    value: 'music',
    label: 'Música',
  },
];

const BestRatedItem: React.FC = () => {
  const [field, , helpers] = useField<string>('bestRatedItem');

  return (
    <Container>
      <Title>
        O que você
        <Bold> mais </Bold> gostou?
      </Title>

      <Options>
        {items.map(({ label, value }) => {
          const isSelected = value === field.value;

          return (
            <Option.Button
              key={value}
              isSelected={isSelected}
              onPress={() => helpers.setValue(value)}>
              <Option.Text isSelected={isSelected}>{label}</Option.Text>
            </Option.Button>
          );
        })}
      </Options>
    </Container>
  );
};

export default BestRatedItem;
