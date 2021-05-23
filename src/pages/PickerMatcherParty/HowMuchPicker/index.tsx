import { useField } from 'formik';
import React from 'react';
import PickerRow from '../PickerRow';

import { Container, OptionButton, OptionText } from './styles';

interface IOption {
  value: string;
}

const optionsMatrix: Array<IOption[]> = [
  [{ value: 'R$ 0 - R$ 50' }, { value: 'R$ 51 - R$ 100' }],
  [{ value: 'R$ 101 - R$ 200' }, { value: 'R$ 200 +' }],
];

const HowMuchPicker: React.FC = () => {
  const [field, , helpers] = useField('howMuch');

  return (
    <Container>
      {optionsMatrix.map((row, index) => (
        <PickerRow key={`how-much-row-${index}`}>
          {row.map(({ value }, index) => (
            <OptionButton
              key={`how-much-${index}`}
              selected={value === field.value}
              onPress={() => helpers.setValue(value)}>
              <OptionText selected={value === field.value}>{value}</OptionText>
            </OptionButton>
          ))}
        </PickerRow>
      ))}
    </Container>
  );
};

export default HowMuchPicker;
