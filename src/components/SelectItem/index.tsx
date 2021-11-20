import React from 'react';

import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { useField } from 'formik';

import { SelectInput, Container } from './styles';

interface Option {
  id: string;
  name: string;
}

interface Props {
  icon?: string;
  items: Option[];
  defaultValue: string;
  label: string;
  required?: boolean;
}

const Select: React.FC<Props> = ({ items, required, ...props }) => {
  const [{ value }, { touched, error }, { setValue }] = useField('gender');

  const itemLabel = props.label && `${props.label}${required ? ' *' : ''}`;

  return (
    <Container error={!!error}>
      <SelectInput
        selectedValue={value}
        onValueChange={(value: ItemValue, _: number) => setValue(value)}>
        <SelectInput.Item label={itemLabel} value={value} />
        {items.map((option: Option) => (
          <SelectInput.Item
            key={option.id}
            label={option.name}
            value={option.id}
          />
        ))}
      </SelectInput>
    </Container>
  );
};

export default Select;
