import React, { useEffect, useState } from 'react';

import { useField } from 'formik';
import RNPickerSelect, { Item } from 'react-native-picker-select';

import { Container } from '@/pages/SignUp/styles';

const SelectInput: any = ({
  items,
  title,
  value,
  pickerProps,
  required,
  ...props
}: any) => {
  const [field, meta, helpers] = useField({ title: 'Gênero' });

  //const [gender, setGender] = useState({ title: 'Gênero' });
  const [selected, setSelected] = useState('');

  

  const itemsOptions[] = props.items && `${props.items}${required ? ' *' : ''}`;

  return (
    <Container>
      <RNPickerSelect
        onValueChange={(value) => setSelected(value)}
        items={itemsOptions[]}
      />
    </Container>
  );
};

export default SelectInput;
