import React from 'react';

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

const Select: React.FC<Props> = ({
  icon,
  items,
  defaultValue,
  required,
  ...props
}) => {
  const [{ value }, { touched, error }, { setValue }] = useField('gender');

  const onChange = (value: string) => {
    setValue(value);
  };
  const itemLabel = props.label && `${props.label}${required ? ' *' : ''}`;

  return (
    <Container>
      <SelectInput selectedValue={value} onValueChange={onChange}>
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
