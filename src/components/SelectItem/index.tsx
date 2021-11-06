import React from 'react';

import { useField } from 'formik';

import { Gender, Container } from './styles';

interface Option {
  id: string;
  name: string;
}

interface Props {
  icon?: string;
  items: Option[];
  defaultValue: string;
  label: string;
}

const Select: React.FC<Props> = ({ icon, items, defaultValue }) => {
  const [{ value }, { touched, error }, { setValue }] = useField('gender');

  const onChange = (value: unknown) => {
    const newValue = typeof value === 'string' ? value : defaultValue;
    setValue(newValue);
  };

  return (
    <Container>
      <Gender selectedValue={value} onValueChange={onChange}>
        <Gender.Item label="Escolha um gênero..." value={value} />
        {items.map((option: Option) => (
          <Gender.Item key={option.id} label={option.name} value={option.id} />
        ))}
      </Gender>
    </Container>
  );
};

export default Select;
